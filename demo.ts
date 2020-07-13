import { readConversation, exportConversation } from "./mod.ts";

const conversation = await readConversation("StajerFood_cM_RBOdhzQ");

await exportConversation(conversation);
