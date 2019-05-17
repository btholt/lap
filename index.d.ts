export type Mark = {
  tag: string;
  s: number;
  ms: number;
};

declare module Lap {
  /**
   * begin timing a new tag and end the previous tag if you were already timing one
   *
   * @param tag the name of the tag you're starting
   */
  export function mark(tag: string): void;
  /**
   * end the previous tag you timing and return the timings, you must have called mark already for the first time
   */
  export function end(): Mark[];
}
