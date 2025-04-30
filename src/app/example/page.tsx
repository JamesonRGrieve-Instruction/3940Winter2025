"use client";
import { getCookie } from "cookies-next";
export default function ExamplePage() {
  return <h1>Hello, World! {getCookie("message")}</h1>;
}
