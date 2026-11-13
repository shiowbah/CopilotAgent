# CopilotAgent

## Testing

Run the end-to-end Playwright tests with:

```bash
npm run test:e2e
```

If Playwright browsers are not installed yet, run `npx playwright install chromium`.

To run the tests in the official Playwright Docker image:

```bash
docker build -f Dockerfile.playwright -t copilotagent-playwright .
docker run --rm copilotagent-playwright
```