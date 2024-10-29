import {registerOTel} from "@vercel/otel";

export function register() {
  registerOTel({serviceName: "nox-creation-pt"});
}
