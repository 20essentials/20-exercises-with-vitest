import { describe, it, expect } from "vitest";
import { cyberReindeer } from "./exercise-7.js";

describe("cyberReindeer()", () => {
  it("should be a function", () => {
    expect(cyberReindeer).toBeTypeOf("function");
  });

  it("should throw an error if the first parameter (road) is not a string", () => {
    expect(() => cyberReindeer(4, 5)).toThrow();
  });

  it("should throw an error if the second parameter (time) is not a number", () => {
    expect(() => cyberReindeer("Hello", "Ha")).toThrow();
  });

  it("should return only the initial state if time is 1", () => {
    expect(cyberReindeer("S.|.", 1)).toEqual(["S.|."]);
  });

  it("should move the sled one step forward if time is 2", () => {
    expect(cyberReindeer("S.|.", 2)).toEqual(["S.|.", ".S|."]);
  });

  it("should stop at the barrier and remain there if time is 3", () => {
    expect(cyberReindeer("S.|.", 3)).toEqual(["S.|.", ".S|.", ".S|."]);
  });

  it("should stay at the barrier for time 4", () => {
    expect(cyberReindeer("S.|.", 4)).toEqual(["S.|.", ".S|.", ".S|.", ".S|."]);
  });

  it("should still remain at the barrier for time 5", () => {
    expect(cyberReindeer("S.|.", 5)).toEqual([
      "S.|.",
      ".S|.",
      ".S|.",
      ".S|.",
      ".S|.",
    ]);
  });

  it("should advance once the barrier opens at time 6", () => {
    expect(cyberReindeer("S.|.", 6)).toEqual([
      "S.|.",
      ".S|.",
      ".S|.",
      ".S|.",
      ".S|.",
      "..S.",
    ]);
  });

  it("should continue moving after the barrier opens (time 7)", () => {
    expect(cyberReindeer("S.|.", 7)).toEqual([
      "S.|.",
      ".S|.",
      ".S|.",
      ".S|.",
      ".S|.",
      "..S.",
      "..*S",
    ]);
  });

  it("should simulate a complex road with multiple barriers for 3 time steps", () => {
    expect(cyberReindeer("S..|...|..", 3)).toEqual([
      "S..|...|..",
      ".S.|...|..",
      "..S|...|..",
    ]);
  });

  it("should make the sled stop at the first barrier (time = 5)", () => {
    expect(cyberReindeer("S..|...|..", 5)).toEqual([
      "S..|...|..",
      ".S.|...|..",
      "..S|...|..",
      "..S|...|..",
      "..S|...|..",
    ]);
  });

  it("should open the barrier and move the sled after waiting (time = 6)", () => {
    expect(cyberReindeer("S..|...|..", 6)).toEqual([
      "S..|...|..",
      ".S.|...|..",
      "..S|...|..",
      "..S|...|..",
      "..S|...|..",
      "...S...*..",
    ]);
  });

  it("should continue moving after crossing the first open barrier (time = 7)", () => {
    expect(cyberReindeer("S..|...|..", 7)).toEqual([
      "S..|...|..",
      ".S.|...|..",
      "..S|...|..",
      "..S|...|..",
      "..S|...|..",
      "...S...*..",
      "...*S..*..",
    ]);
  });

  it("should continue to move one step further (time = 8)", () => {
    expect(cyberReindeer("S..|...|..", 8)).toEqual([
      "S..|...|..",
      ".S.|...|..",
      "..S|...|..",
      "..S|...|..",
      "..S|...|..",
      "...S...*..",
      "...*S..*..",
      "...*.S.*..",
    ]);
  });

  it("should keep moving forward through the open barriers (time = 9)", () => {
    expect(cyberReindeer("S..|...|..", 9)).toEqual([
      "S..|...|..",
      ".S.|...|..",
      "..S|...|..",
      "..S|...|..",
      "..S|...|..",
      "...S...*..",
      "...*S..*..",
      "...*.S.*..",
      "...*..S*..",
    ]);
  });

  it("should reach the end of the road after crossing all barriers (time = 10)", () => {
    expect(cyberReindeer("S..|...|..", 10)).toEqual([
      "S..|...|..",
      ".S.|...|..",
      "..S|...|..",
      "..S|...|..",
      "..S|...|..",
      "...S...*..",
      "...*S..*..",
      "...*.S.*..",
      "...*..S*..",
      "...*...S..",
    ]);
  });
});
