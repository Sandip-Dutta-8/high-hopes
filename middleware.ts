import { authMiddleware } from '@clerk/nextjs/server';

export default authMiddleware({
    publicRoutes: [
      '/',
      '/events/:id',
      '/api/webhooks/clerk',
      '/api/uploadthing'
    ],
    ignoredRoutes: [
      '/api/webhooks/clerk',
      '/api/uploadthing'
    ]
  });

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)']
};