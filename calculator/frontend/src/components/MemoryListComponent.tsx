import React from "react";
import { MemoryEntry } from "../constants/MemoryEntry";
import { memoryRecall } from "../functions/CalculatorFunctions";

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
          <li key={entry.id}>
            {entry.timestamp.toString()}: {entry.value.toString()} (
            <span
              className="memoryEntryLink"
              onClick={() => memoryRecall(entry.id)}
            >
              Recall
            </span>
            )
          </li>
        ))}
      </ul>
    </div>
  );
}
