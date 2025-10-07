import React, { useState } from "react";
import css from './SidebarMenu.module.css';

interface MenuItem {
    label: string;
    children?: MenuItem[];
};

interface SidebarMenuProps {
    items: MenuItem[];
    isOpen: boolean;
    onClose: () => void;
};

export const SidebarMenu: React.FC<SidebarMenuProps> = ({ items, isOpen, onClose }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <>
            {isOpen && <div onClick={onClose} className={css.overlay} />}

            <div className={`${css.sidebar} ${isOpen ? css.open : ""}`}>
                <h3 className={css.title}>Menu</h3>
                <ul className={css.menuList}>
                    {items.map((item, index) => (
                        <li key={index} className={css.menuItem}>
                            <button onClick={() => item.children ? setOpenIndex(openIndex === index ? null : index) : null}
                            className={css.button}>
                                {item.label}
                            </button>

                            {item.children && openIndex === index && (
                                <ul className={css.submenu}>
                                    {item.children.map((sub, i) => (
                                        <li key={i} className={css.submenuItem}>
                                            {sub.label}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}