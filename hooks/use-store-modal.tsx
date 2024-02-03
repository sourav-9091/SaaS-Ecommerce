import { create } from "zustand"

interface useStoreModalInterface {
    isOpen: boolean;
    onOpen: () => {};
    onClose: () => {};

}