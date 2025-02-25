/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { otpCreateAuthentication } from "../../funcs/otpCreateAuthentication.js";
import * as components from "../../models/components/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: components.CreateAuthenticationRequest$inboundSchema.optional(),
};

export const tool$otpCreateAuthentication: ToolDefinition<typeof args> = {
  name: "otp_create-authentication",
  description: `Send a code`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await otpCreateAuthentication(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
