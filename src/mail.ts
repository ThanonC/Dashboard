import { MessageClient } from "cloudmailin"
//https://docs.cloudmailin.com/outbound/examples/send_email_with_node_js/

const client = new MessageClient({ username: USERNAME, apiKey: API_KEY});
const response = await client.sendMessage({
  to: 'test@example.net',
  from: 'test@example.com',
  plain: 'test message',
  html:  '<h1>Test Message</h1>',
  subject: "hello world"
});
