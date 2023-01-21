## Architecture Overview
![alt text](https://github.com/mikana0918/fullstack-ts-example-app/blob/main/concet.drawio.svg)

- Infra (90% Terraform Managed)
  - EC2 (Node.js)
  - RDS (MySQL)
  - ALB
  - ACM
  - Amplify
  - S3 (Only for tfstate store)
- Infra (Amplify managed CloudFormation stack)
  - Cognito
  - S3 (for backend object storage)
- Hosting 
  - Github Pages
- CI/CD
  - Github Actions
    - Testing
    - Reviewdog to independently check lint
    - Deploy both frontend & backend
  - Amplify CI
- Backend
  - TypeScript
  - Frourio
  - Fastify
  - Prisma
  - Support lib
    - fp-ts (barrow Monad impl)
    - AWS SDK 
- Frontend
  - TypeScript
  - Next.js
  - Frourio (Aspida, Pathpida)
  - UI lib
    - Chakra UI
  - State management / Flux impl
    - Zustand
  - Forms & Validations
    - Formik
    - Zod (Zod adaptor)
- etc
  - Google Domain for DNS settings (Route53 is not used)
  - PM2 for daemon monitoring / management
  - Amplify CLI & Amplify file stubs

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:8000](http://localhost:8000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
