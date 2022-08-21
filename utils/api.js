import { $cms } from "@/utils/https";

const request = $cms();

function createContactForm(data) {
    return request.post("/misc/contact", data);
};

export { createContactForm };