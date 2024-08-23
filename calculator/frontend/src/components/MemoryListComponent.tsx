import React from "react";
import { MemoryEntry } from "../constants/MemoryEntry";

export type MemoryListComponentProps = {
  entries: MemoryEntry[];
};

/**
 * Create the memory button section component.
 * @returns the memory button section component
 */
export default function MemoryListComponent(props: MemoryListComponentProps) {
  return (
    <div id="memoryList">
      <h2>Memory List</h2>
      <ul>
        {props.entries.map((entry) => (
          <li>
            {entry.timestamp.toString()}: {entry.value.toString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
