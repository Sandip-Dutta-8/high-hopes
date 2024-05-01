import { authMiddleware } from '@clerk/nextjs/server';

export default authMiddleware({
    publicRoutes: [
      '/',
      '/events/:id',
      '/api/webhooks/clerk',
      '/api/webhooks/stripe',
      '/api/uploadthing'
    ],
    ignoredRoutes: [
      '/api/webhooks/clerk',
      '/api/uploadthing',
      '/api/webhooks/stripe'
    ]
  });

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)']
};