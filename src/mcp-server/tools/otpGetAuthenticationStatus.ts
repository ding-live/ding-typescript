/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { otpGetAuthenticationStatus } from "../../funcs/otpGetAuthenticationStatus.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  authUuid: z.string(),
};

export const tool$otpGetAuthenticationStatus: ToolDefinition<typeof args> = {
  name: "otp-get-authentication-status",
  description: `Get authentication status

Get the status of an authentication.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await otpGetAuthenticationStatus(
      client,
      args.authUuid,
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
