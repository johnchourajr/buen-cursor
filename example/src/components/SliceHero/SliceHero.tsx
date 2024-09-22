"use client";

import { ActionButton } from "../Action/ActionButton";
import { ActionLink } from "../Action/ActionLink";

const cursorTypes = [
  {
    content: (
      <>
        <ActionButton onClick={() => {}}>Button</ActionButton>
      </>
    ),
    type: "button",
    key: "button",
  },
  {
    // anchor tag
    content: (
      <>
        <ActionLink href="#" scroll={false}>
          Link
        </ActionLink>
      </>
    ),
    type: "link",
    key: "link",
  },
  {
    // div with data-cursor
    content: (
      <>
        <div data-cursor>Div with data-cursor</div>
      </>
    ),
    type: "div",
    key: "div",
  },
  {
    // link with data-cursor
    content: (
      <>
        <ActionLink href="#" data-cursor="false" scroll={false}>
          Link with data-cursor=&ldquo;false&rdquo;
        </ActionLink>
      </>
    ),
    type: "native-link",
    key: "native-link",
  },
  {
    // draggable div
    content: (
      <>
        <div draggable data-cursor-drag>
          Draggable Div with data-cursor-drag
        </div>
      </>
    ),
    type: "draggable",
    key: "draggable",
  },
  {
    // div with data-cursor-message
    content: (
      <>
        <div data-cursor-message="Message" className="p-4">
          Div with data-cursor-message=&ldquo;Message&rdquo;
        </div>
      </>
    ),
    type: "message",
    key: "message",
  },
];

export function SliceHero() {
  return (
    <>
      <section className="col-span-full flex flex-col items-center justify-center py-[20vh] md:mt-0 min-h-[50vh] text-center leading-[.9]">
        <h1 className="headline-display-xxl">Very Good<br/>Cursor</h1>
      </section>
      <div className="grid-cols-subgrid grid pb-4 col-span-full gap-4">
        {cursorTypes.map((cursorType) => (
          <div
            key={cursorType.key}
            className="col-span-2 border-1 border-dotted rounded-md flex items-center justify-center aspect-square text-center"
          >
            {cursorType.content}
          </div>
        ))}
      </div>
    </>
  );
}
