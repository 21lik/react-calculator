import React from "react";

export type MemoryEntry = {
  timestamp: Date;
  value: number;
};

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
            {entry.timestamp.toISOString()}: {entry.value.toString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
