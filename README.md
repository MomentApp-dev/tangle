# Dev setup

## Credentials

You will need to configure a development credentials profile using the AWS CLI.

1. `aws configure --profile PROFILE_NAME`
2. You will be prompted to enter:
   - Access Key ID: (Copy this from the downloaded CSV file)
   - Secret Access Key: (Copy this from the downloaded CSV file)
   - Default region: (e.g., us-west-2 for Oregon, or us-east-1 for Virginia)
   - Output format: (Leave it blank or type json)

## First time setup

1. `npm install`
2. **If you are on Windows** you need to set `DEBUG` env var
   - Windows Command Prompt: `set DEBUG=myapp:*`
   - Windows PowerShell: `$env:DEBUG='myapp:*'`

## Running Prettier

1. To have Prettier do clean-up for you: `npx prettier . --write`
2. To check formatting without overwriting code: `npx prettier . --check`

# Run on `http://localhost:8080`

1. `npm start`
2. Visit `http://localhost:8080/` on your local browser
