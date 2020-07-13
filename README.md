# Messenger Analyzer

_v0.2.0_

Facebook messenger conversation analyzer with Hungarian language support.

&nbsp;

### Features

- Count words by popularity
- Count messages by senders
- Export conversation info to JSON

**More features are coming!**

Feel free to add new features.

&nbsp;

### How to use

To use this package, you need to download your facebook messages from https://www.facebook.com/dyi/?referrer=yfi_settings. (Based on how popular you are, this can be a very large file ...)

Extract the `messages` folder to a directory called `data`.

#### Reading a conversation

To fetch a conversation's messages, you need it's id, which is the folder's name inside the `inbox` folder.
The ID consists of your friend's name, and some random digits after it.

```ts
import { readConversation } from "https://raw.githubusercontent.com/meszarosdezso/messenger-analyzer/master/mod.ts"
const conversation = await readConversation("NAME_AND_SOME_RANDOM_DIGITS")
```

#### Counting words by popularity

```ts
const wordCount = conversation.countWords()
```

#### Counting messages by senders

```ts
const msgsBySenders = conversation.countMessagesBySenders()
```

#### Exporting the conversation info

```ts
import { exportConversation } from "https://raw.githubusercontent.com/meszarosdezso/messenger-analyzer/master/mod.ts"
await exportConversation(conversation)
```
