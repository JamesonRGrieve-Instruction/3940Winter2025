#!/bin/bash

# Define a regex pattern for allowed email addresses.
# For example, to allow emails ending with @example.com or a specific email,
# you might set:
ALLOWED="(jamesonrgrieve@gmail\.com)"

# Output file
OUTPUT_FILE="non_allowed_blame.txt"
>"$OUTPUT_FILE" # Clear any existing content

# Iterate over every tracked file in the repository
while IFS= read -r file; do
    # Run git blame with --show-email so that emails are shown.
    # Exclude both allowed emails and "<not.committed.yet>" authors
    blame_output=$(git blame --show-email "$file" 2>/dev/null | grep -vE "$ALLOWED|<not\.committed\.yet>")

    # If there's any output, write the file path and blame details.
    if [[ -n "$blame_output" ]]; then
        {
            echo "File: $file"
            echo "$blame_output"
            echo "---------------------------------------"
        } >>"$OUTPUT_FILE"
    fi
done < <(git ls-files)

echo "Blame output for non-allowed emails has been saved to $OUTPUT_FILE."
