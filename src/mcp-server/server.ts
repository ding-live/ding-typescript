/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { DingCore } from "../core.js";
import { SDKOptions } from "../lib/config.js";
import type { ConsoleLogger } from "./console-logger.js";
import { MCPScope, mcpScopes } from "./scopes.js";
import { createRegisterTool } from "./tools.js";
import { tool$lookupLookup } from "./tools/lookupLookup.js";
import { tool$otpCheck } from "./tools/otpCheck.js";
import { tool$otpCreateAuthentication } from "./tools/otpCreateAuthentication.js";
import { tool$otpFeedback } from "./tools/otpFeedback.js";
import { tool$otpGetAuthenticationStatus } from "./tools/otpGetAuthenticationStatus.js";
import { tool$otpRetry } from "./tools/otpRetry.js";

export function createMCPServer(deps: {
  logger: ConsoleLogger;
  allowedTools?: string[] | undefined;
  scopes?: MCPScope[] | undefined;
  serverURL?: string | undefined;
  apiKey?: SDKOptions["apiKey"] | undefined;
  serverIdx?: SDKOptions["serverIdx"] | undefined;
}) {
  const server = new McpServer({
    name: "Ding",
    version: "0.18.1",
  });

  const client = new DingCore({
    apiKey: deps.apiKey,
    serverURL: deps.serverURL,
    serverIdx: deps.serverIdx,
  });
  const scopes = new Set(deps.scopes ?? mcpScopes);
  const allowedTools = deps.allowedTools && new Set(deps.allowedTools);
  const tool = createRegisterTool(
    deps.logger,
    server,
    client,
    scopes,
    allowedTools,
  );

  tool(tool$otpCheck);
  tool(tool$otpCreateAuthentication);
  tool(tool$otpFeedback);
  tool(tool$otpGetAuthenticationStatus);
  tool(tool$otpRetry);
  tool(tool$lookupLookup);

  return server;
}
