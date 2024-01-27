import React from "react";
import { MenuContainer, MenuItem, MenuWrapper } from "./Menu.styles";
import Text from "../Text/Text";

interface Item {
    title: string;
    label: string;
    key: string;
    icon?: any;
    disabled?: boolean;
}

interface MenuProps {
    items: Item[];
    isDisabled?: boolean;
}

const Menu = (props: MenuProps) => {
    const { items, isDisabled = false } = props;

    const listItems = () => {
        const itemsList = items.map((item: Item) => (
            <MenuItem key={item.key} isDisabled={item.disabled}>
                <Text
                    isDisabled={item.disabled}
                    content={item.label}
                    category="link"
                    linkURL="#"
                />
            </MenuItem>
        ));

        return <MenuContainer>{itemsList}</MenuContainer>;
    };

    return <MenuWrapper>{items.length >= 1 && listItems()}</MenuWrapper>;
};

export default Menu;
