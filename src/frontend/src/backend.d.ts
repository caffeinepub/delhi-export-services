import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Inquiry {
    serviceType: string;
    name: string;
    email: string;
    message: string;
    phone: string;
}
export interface backendInterface {
    getAllInquiries(): Promise<Array<Inquiry>>;
    submitInquiry(name: string, email: string, phone: string, serviceType: string, message: string): Promise<void>;
}
