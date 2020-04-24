# Chatter
> A Twitter-like user interface

**Live Demo:** https://m-amaya.github.io/chatter/

## Run

* Node `^12.7`
* Yarn `^1.17`

1. Install dependencies - `$ yarn`
2. Run locally - `$ yarn serve`
3. App should be running locally on port `8000`.

### Commands

* `serve` - Serve the application locally
* `build` - Produce a production build
* `verify` - Run lint, type, and test on source code
* `deploy` - Deploy the application to `gh-pages` branch (need permission)

## Overview

Most of the functionality is located in `src/store/chatter.store.ts`. This is where the `posts$` (a.k.a `tweets`) stream is generated. From the original stream, two view streams are created:

1. `postsForView$` - The filtered stream of posts that gets rendered
2. `likedPostsForView$` - The filtered stream of liked posts that gets rendered

The store also contains all the actions a user can take on the posts.

* `send` - Create a new post
* `like` - Like a post
* `unlike` - Unlike a post
* `clear` - Clear the posts

Most of the React part of the application is located in `src/app/pages/HomePage.tsx`. This is where all the functionality asked for in the assignment is rendered, including:

* Ability to post a tweet
* Ability to like/unlike a tweet
* Ability to toggle between all and liked tweets
* Display a counter of liked tweets
* Ability to clear the tweets

## Lessons Learned

### Lesson #1: Keeping streams pure

My initial approach centered around the concept of a store, and injecting that store into React components that needed it. My inspiration for this came from how observables are mainly used in MobX and Angular. As I got further into my solution, however, I realized that elevating streams outside of the component itself could have made things more performant. Transfoming the original stream into a stream of React components is something I want to experiment with in the future.

### Lesson #2: React Context vs. Services vs. Global Constants

I'm still playing around with the React context and the best way to use it. This particular app wasn't a very good use case because a lot of the global state / styling could've been kept constant. If the app needed theming, then injecting styles would've been more useful. As far as the store, I think RxJS observables would do better as services, similar to how they're used in Angular.