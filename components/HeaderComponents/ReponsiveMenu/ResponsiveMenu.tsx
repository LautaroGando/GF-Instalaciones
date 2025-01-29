import ButtonMenu from "./ButtonMenu/ButtonMenu";

export const ResponsiveMenu: React.FC = () => {

    return (

        <div className="xl:hidden">
            <ButtonMenu />
        </div>

    );

};

export default ResponsiveMenu;