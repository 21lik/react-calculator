import axios from "axios";
import {
  MEMORY_LIST_API_URL,
  LATEST_MEMORY_API_URL,
  NEW_MEMORY_API_URL,
  MEMORY_API_URL,
} from "../constants";

/**
 * Get the calculator memory list.
 * @returns a response promise
 */
export function getMemoryList() {
  console.log("Getting memory list");
  return axios.get(MEMORY_LIST_API_URL);
}

/**
 * Clear the calculator memory list.
 * @returns a response promise
 */
export function deleteMemoryList() {
  console.log("Deleting memory list");
  return axios.delete(MEMORY_LIST_API_URL);
}

/**
 * Get the latest calculator memory entry.
 * @returns a response promise
 */
export function getLatestMemoryEntry() {
  console.log("Getting latest memory entry");
  return axios.get(LATEST_MEMORY_API_URL);
}

/**
 * Get the memory entry with the given unique id.
 * @param id the id
 * @returns a response promise
 */
export function getMemoryEntry(id: number) {
  console.log("Getting memory entry with id", id);
  return axios.get(MEMORY_API_URL + id);
}

/**
 * Set the latest calculator memory entry to the new value.
 * @param newValue the new value
 * @returns a response promise
 */
export function setLatestMemoryEntry(newValue: number) {
  console.log("Setting latest memory entry to value", newValue);
  return axios.put(LATEST_MEMORY_API_URL, { value: newValue });
}

/**
 * Set the memory entry with the given unique id to the new value.
 * @param id the id
 * @param newValue the new value
 * @returns a response promise
 */
export function setMemoryEntry(id: number, newValue: number) {
  console.log("Setting memory entry with id", id, "to value", newValue);
  return axios.put(MEMORY_API_URL + id, { value: newValue });
}

/**
 * Post (create) a new memory entry with the given value.
 * @param value the entry value
 * @returns a response promise
 */
export function postNewMemoryEntry(value: number) {
  console.log("Posting new memory entry with value", value);
  return axios.post(NEW_MEMORY_API_URL, { value: value });
}
