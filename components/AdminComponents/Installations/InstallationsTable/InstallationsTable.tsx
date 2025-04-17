"use client";

import InstallationsTableHeader from "./InstallationsTableHeader/InstallationsTableHeader";
import IInstallation from "@/interfaces/IInstallation";
import CreateButton from "@/components/ui/AdminComponents/CreateButton/CreateButton";
import RenderEmptyState from "@/components/ui/AdminComponents/RenderEmptyState/RenderEmptyState";
import Loading from "@/components/ui/GeneralComponents/Loading/Loading";
import InstallationRow from "./InstallationRow/InstallationRow";
import useInstallationsTableLogic from "@/hooks/useInstallationsTableLogic";
import { AnimatePresence } from "framer-motion";
import { useTrackingStore } from "@/store/Admin/TrackingStore/TrackingStore";

const InstallationsTable = () => {
  const {
    order,
    isLoading,
    handleEdit,
    handleDelete,
    handleViewAddress,
    handleViewInstallers,
    handleViewNotes,
    handleCancelInstallation,
  } = useInstallationsTableLogic();

  const { editedInstallationId } = useTrackingStore();

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
    return (
      <RenderEmptyState
        title="No se encontraron instalaciones."
        text="Intenta más tarde o utiliza otro filtro."
      />
    );
  }

  return (
    <>
      <div className="w-full h-[max-content] min-h-[610px] overflow-x-auto">
        <table className="text-sm text-left w-full border-collapse">
          <InstallationsTableHeader />
          <tbody>
            <AnimatePresence>
              {order.installations.map((installation: IInstallation, i) => {
                const coordinatorName = installation.coordinator?.user.fullName || "-";

                return (
                  <InstallationRow
                    key={i}
                    installation={installation}
                    coordinatorName={coordinatorName}
                    onEdit={() => handleEdit(installation)}
                    onDelete={() => handleDelete(installation.id)}
                    onViewAddress={() => handleViewAddress(installation)}
                    onViewInstallers={() => handleViewInstallers(installation)}
                    onCancel={()=> handleCancelInstallation(installation.id, "Cancelada")}
                    onViewNotes={() =>
                      handleViewNotes(installation, installation.notes, installation.images)
                    }
                    wasRecentlyEdited={editedInstallationId === installation.id}
                  />
                );
              })}
            </AnimatePresence>
          </tbody>
        </table>
      </div>
      <CreateButton />
    </>
  );
};

export default InstallationsTable;
