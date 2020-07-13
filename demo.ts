import {
  readConversation,
  exportConversation,
} from "https://raw.githubusercontent.com/meszarosdezso/messenger-analyzer/master/mod.ts";

const conversation = await readConversation("StajerFood_cM_RBOdhzQ");

await exportConversation(conversation);
