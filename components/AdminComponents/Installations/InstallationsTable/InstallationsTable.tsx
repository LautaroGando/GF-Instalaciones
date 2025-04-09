"use client";

import InstallationsTableHeader from "./InstallationsTableHeader/InstallationsTableHeader";
import IInstallation from "@/interfaces/IInstallation";
import CreateButton from "@/components/ui/AdminComponents/CreateButton/CreateButton";
import RenderEmptyState from "@/components/ui/AdminComponents/RenderEmptyState/RenderEmptyState";
import Loading from "@/components/ui/GeneralComponents/Loading/Loading";
import InstallationRow from "./InstallationRow/InstallationRow";
import useInstallationsTableLogic from "@/hooks/useInstallationsTableLogic";

const InstallationsTable = () => {
  const { order, isLoading, handleEdit, handleDelete, handleViewAddress, handleViewNotes } =
    useInstallationsTableLogic();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loading theme="light" />
      </div>
    );
  }

  if (!order) {
    return <RenderEmptyState title="No se encontró la orden seleccionada." />;
  }

  if (!order.installations?.length) {
    return <RenderEmptyState title="Esta orden no tiene instalaciones asignadas." />;
  }

  console.log(order);

  return (
    <>
      <div className="w-full h-[max-content] min-h-[400px] overflow-x-auto">
        <table className="text-sm text-left w-full border-collapse">
          <InstallationsTableHeader />
          <tbody>
            {order.installations.map((installation: IInstallation, i) => {
              const coordinatorName = installation.coordinator?.name || "-";

              return (
                <InstallationRow
                  key={i}
                  installation={installation}
                  coordinatorName={coordinatorName}
                  onEdit={() => handleEdit(installation)}
                  onDelete={() => handleDelete(installation.id)}
                  onViewAddress={() => handleViewAddress(installation)}
                  onViewNotes={() => handleViewNotes(installation)}
                />
              );
            })}
          </tbody>
        </table>
      </div>
      <CreateButton />
    </>
  );
};

export default InstallationsTable;
