module LogLevels

let message (logLine: string): string =
  let idx = logLine.IndexOf(":")
  let substr = logLine.Substring(idx + 1)
  substr.Trim()

let logLevel(logLine: string): string =
  let errorLabel = logLine.Split(":")[0]
  errorLabel.Replace("[", "").Replace("]", "").ToLower()

let reformat(logLine: string): string =
  let msg = message logLine
  let label = logLevel logLine
  msg + " (" + label + ")"

