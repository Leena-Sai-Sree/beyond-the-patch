# Validation test record — November 9, 2026

## Executed checks
The repository validator is executed with Node.js against the local research files. It compares historical tables with Git baseline 3fb0fb1, parses the Outlook CSV/source register, recomputes separate category maxima, hashes the KEV snapshot, checks local file links and inspects the review overlay. Expected outcomes are deterministic record counts, unchanged historical rows, valid references/ranges and explicit unresolved review flags.

See the generated [validation results](2026-11-09-validation-results.json) for each check and its actual PASS/FAIL result, and the [readable report](2026-11-09-validation-report.md) for scope. These are dataset and repository checks. They do not establish detector performance, remediation effectiveness, absence of compromise, independent coding agreement or population representativeness.

## Reproduction
From a Git checkout containing baseline 3fb0fb1, run:

~~~text
node analysis/validate-repository.mjs
~~~

The command regenerates the two reports and returns a nonzero exit status if any check fails. It does not contact production assets. External live-page checks are recorded as source observations with locators, not detection experiments. Future technical experiments require a specified artifact, environment, expected outcome and observed result before inclusion as completed tests.
