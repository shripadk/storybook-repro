import * as React from "react"

export type Props = {
  type: "button" | "submit" | "reset"
  kind?: string
  children: React.ReactNode
}

export function Button(props: Props) {
  return (
    <button className={props.kind} type={props.type}>
      {props.children}
    </button>
  )
}
