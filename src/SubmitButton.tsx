import * as React from "react"
import { Button, Props as ButtonProps } from "./Button"

export type Props = ButtonProps & {
  color: string
}

export function SubmitButton(props: Props) {
  return (
    <Button type="submit">
      {props.children} <strong style={{ color: props.color }}>→</strong>
    </Button>
  )
}
