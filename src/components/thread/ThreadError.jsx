import Thread from "./Thread";

export default function ThreadError({ body }) {
  return <Thread body={body} isError={true} />;
}
