##  About This Changelog

Hi there 🙋,

🗻 This is an ad-hoc log of what topics we have covered in [**ZeroToHero** live
streams](https://twitch.tv/ZeroToHeroDev), and what’s coming up next.

⚡ I update this log after the end of each stream.

📅 My current schedule is (*all times are Pacific*):

* **Tuesday**, *6pm–7:30pm*
* **Thursday**, *6pm–7:30pm*
* **Sunday**, *12pm–1:30pm*

💡 [Follow me on **Twitch** to get notified as soon as I’m 
online](https://twitch.tv/ZeroToHeroDev).

Enjoy, and may the source be with you 🦄,

Volkan.

## The Structure of This Document

This document has two main sections.

* “*Team ZeroToHero*” is relevant to our loosely-coupled, highly-effective 
  ZeroToHero core team.
* “*ZeroToHero Stream*” is mostly relevant to me, to organize my thoughts
  about what to cover in the next session. 
    * This section also serves as a timestamped log of what we have covered so far.

## Team ZeroToHero

```
✨ ZeroToHero.dev High-Level Top Three
  🔥 Catch up with the lesson notes.
  🔥 Complete missing video lessons. 
  🔥 Update the notes and source of the recent episode and
     clean-up this file. 
––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
✨ Work in Progress
  🚀 Academy needs navigation (I) 
  🚀 Gatsby work (O)
  🚀 Lower thirds (O)
  🚀 Design system (Hz)
  🚀 Flicker (I)
```

## ZeroToHero Stream

```
✨ Backlog
  🚀 We need a feedback/troubleshooting docs system for z2h.
  🚀 create a mechanism to disable cloudfront if traffic is abnormally high.
  🚀 edit code in browser and build, execute, run tests in ECS. 
        (run) -> save all code to user’s remove env; then execute it there.
  🚀 have a non-cloudfront ec2-based backup option for static content. 
  🚀 enable service workers. 
  🔬 study.zerotohero.dev
  📡 Overwiew current z2h AWS WAF settings.
  ❓ domains to make use of: bytesized.tv, zerotohero.tv, o2js.com              
  ❓ maybe move the z2h team to Discord too.
  ⌛ when academy is gatsbified:
    📄 Move some of the “conventions” docs you have as tips/articles to academy. 

✨ Web Pages to Update
  🦆 z2h needs a “credits” page for icons we use, technologies we use, and also
     core contributors. 
     Related: z2h needs a “footer”.
  🦆 https://academy.zerotohero.dev/community/volkan--uses
  🦆 a write-up about my streaming setup
  🦆 move closed AMA topics to z2h academy
  🦆 https://github.com/v0lkan/ama/issues/9
  🦆 @@content_to_update in Obsidian 
  🦆 How those .sh files work. Add a separate section 
     in the lesson notes. Also update the lesson notes
     that our development server requires a linux-like
     environment, such as an actual linux, or Mac OS, 
     or WSL.

✨ Personal Organization 
  🧹 Process IA writer + MS Todos + reMarkable

✨ ZeroToHero Queue
   🦄 stripe webhook integration 
   🦄 parallelize vimeo stream source API calls.
   🦄 write tests for the API endpoints. (maybe a separate repo for that)
      to be run before each deployment.

✨ Use Case Queue
   🚀 Creating a GitHub action using Go or Node
   🚀 Animation with React Spring

✨ Algorithm Queue
  🧩 Design and traverse a binary tree 
  🧩 Tries 
  🧩 Traveling salesperson problem using dynamic programing.
  🧩 Count number of islands on a grid
  🧩 Minimum cut in a maximum flow
  🧩 BFS / DFS in trees and graphs

✨ Things to Cover in the Next Episodes (Candidate)
  📂 Logic
     ❓ Curry’s Paradox
        📚 https://en.wikipedia.org/wiki/Curry%27s_paradox
        📚 https://plato.stanford.edu/entries/curry-paradox/
        📚 http://www.math.niu.edu/~richard/Math101/implies.pdf
  📂 Miscellaneous
     🌌 Create a higlight from the last GRIS game that you played.
     🌌 Photo download time
     🌌 Recharge the jump starter
     🐦 There are emails, twitter and discord messages waiting for your reply..
     🐦 solution to rdp artifact was to use an non-microsoft-maintained RDP client.
     🐦 roller coaster + was able to get so much done + will do this at the
        last week of every month.
  📂 JavaScript Practice 
    ☕ CSV-to-JSON Converter
      📋 Unfinished CSV-to-JSON converter from the former episode:
         const csvToJson = (csvText) => {
           const trimmed = csvText.trim();
           const endIndex = trimmed.indexOf('\n');
           const headerText = trimmed.slice(0, endIndex);
           const headers = headerText.split(byComma);
           return {headers};
         };
    ☕ Function Composition
  📂 DevOps Time 
    📡 The build pipeline for volkan.io is broken.
    📡 Add far future expires headers to bundled assets.
       For that:
          - the generated assets should have uniqe names.
          - we should **NOT** cache index.html on s3 (use CloudFront cache defauls)
    📡 Use service workers (z2h and academy) 
       You’ll also need a kill switch.
    📡 z2h: there is a danglng `eap-details` file on s3.
    📡 z2h: deployment should clean the bucket entirely before pushing new
       stuff. 
    📡 Make deployment more granular, I should be able to deploy a single 
    💄 z2h and academy needs footers (for credits, disclaimers, and such). 
       service only.
    📡 Add version info to deployed apps. z2h-app-stg@1.0.1 using z2h-api-stg@1.1.0
       to the footer. As in consume: /api/meta/v1/info {health:{}, readiness:{}, versions:{}}
  📂 Apps to Discuss
    🛸 Duet (https://www.duetdisplay.com)
  📂 DevOps 
    📡 Track deployments https://app.honeybadger.io/onboarding/deploy
    📡 Run deployment commands using pubnub. {action:'exec', command:
       'pssh-build-all-prod'} 
    📡  Upload source maps to the badger during build
       https://docs.honeybadger.io/lib/javascript/guides/using-source-maps.html 
  📂 Ideas 
    💭 Every Sunday; office hours + an algorithm question or a system design topic. 
    💭 zerotohero.tv: a place that has all of the episodes in a clean, navigable
       format.
  📂 Bug Bash
    🐞 academy: sort order (client side)
    🐞 academy: api response section and lesson ids are string, they should be 
       numbers.
    🐞 academy: api lesson lists’s response is not sorted (server-side)
    🐞 `LessonProgress` have sectionId and lessonId as strings, they should
        have been numbers.
    🐞 in free mode don’t call progress api. if the user does not have a
       matching course, calling progress will err out.
    🧪 create z2h api tests.
    🚀 academy: add syntax highlighting 
    🚀 academy: back to index link at the bottom of the articles.
    🚀 check all service code and notify important errors:
       if err != nil {honeybadger.Notify(err)}
       or maybe create a generic error handler.
    🚀 Add status indicator to the footer of the app.
    🦆 Add legal stuff etc to the footer of the app too.
    🦆 Update volkan_uses + create a streaming setup doc. 
    🦆 Update the runbooks: anonymous use, free user, paid user, user with
       invalid course.
    🚀 create a dev `yarn start` that does not include HoneyBadger registration.
       do this for all static web apps under z2h umbrella.

  📂 Chores
    🧹 Clean up the house first. 👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈👈

✨ Current Episode (Episode 036) WIP 

✨ Episode 036 (2020-12-08)

––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

✨ Thanksgiving Break 🦃 (2020-11-26—2020-12-07)
  📂 Funsies
    📹 Create an intro video for the ZeroToHero Twitch channel.
    🧪 Design a Roller Coaster
  📂 Docs
    🏡 Update volkan.io to reflect recent stuff.
  📂 DevOps
    📡 Send an email when abnormal traffic on cloudfront.
    📡 create s3/route53/etc for community.zerotohero.dev
    📡 push the new “academy” there. 
    📡 Mailgun IP Whitelisting
    📡 Only exposing stripe test api keys. 
    📡 Set elastic IPs to the mailgun client edge nodes.
  📂 Features
    🚀 Replace ASCII-art in the lesson notes with proper diagrams and images. 
    🚀 implement the pubnub deployment pipeline 
    🚀 add honeybadger to blog.
    🚀 Use something to report client-side errors.
       https://www.honeybadger.io/plans/
    🚀 Add HoneyBadger to academy.
  📂 Bug Bash
    🐞 academy: images are not responsive
    🐞 academy: top margin to heading
    🐞 GET https://staging.zerotohero.dev/login returns 404, it should return 
       200 from CloudFront; fix it for other distributions too.
    🐞 z2h split restarts from infra builds 
    🐞 z2h crypto did not send any error to badger
    🐞 pass production or staging to services' honeybadger .Env configuration.
    🐞 when free mode padlock not showing, and the UX is confusing, to say the 
       least.
    🐞 progress api is giving 404
       » https://api-staging.zerotohero.dev/progress/v1/progress/z2hjs/ ↙
         sections/1/lessons/1
    🐞 Login operation in the recent staging is not working for
       staging.zerotohero.dev 
    🐞 z2h-web there is a hard-coded api.zerotohero.dev link, it should be
       dynamically created based on the build-time env configuration instead.
    🐞 z2h-progress is not building on edge after dependency update
    🐞 z2h-mailer is not building on edge after dependency update
    🐞 z2h-idm is not building on edge after dependency update
✨ Episode 035 (2020-11-22)
  📂 ZeroToHero Platform 
    🐞 z2h-crypo is not building on edge after dependency update
  📂 JavaScript Nuggests
    ☕ Implementing a CSV-to-Array converter.
✨ Episode 034 (2020-11-19)
  📂 Development Environment Setup 
    🔨 Rename all of the `master` branches as `main`.
    🔨 Get rid of the `edge` branch; use proper tagging instead.
✨ Episode 033 (2020-11-19)
  📂 ZeroToHero Platform 
    🐞 Review the new cache implementation of the ZeroToHero video endpoints.
    🔨 Command-Query separation examples.
  📂 App of the Day 
    🪀 kroki: https://kroki.io/ 
  📂 Code Challenge
    🧩 Linked List `PushBack` algorithm review
  📂 Refactoring Time
    🔨 Refactoring ZeroToHero Go services
✨ Episode 032 (2020-11-17)
  📂 ZeroToHero Platform 
    🦄 /logout API implementation
  📂 Code Challenge
    🧩 Circular loop detection in a linked list 
  📂 Practice Time
    🚀 Using PubNub to trigger a remote deployment 
```

