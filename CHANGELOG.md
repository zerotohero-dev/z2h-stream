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

```
✨ ZeroToHero.dev High-Level Top Three 
  🔥 There are build errors and login issues on staging.
  🔥 Catch up with the lesson notes.
  🔥 Update the notes and source of the recent episode and
     clean-up this file. 

––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

✨ Work in Progress
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
🔳  📡 Send an email when abnormal traffic on cloudfront.
🔳  📡 The build pipeline for volkan.io is broken.
🔳  📡 Add far future expires headers to bundled assets.
       For that:
          - the generated assets should have uniqe names.
          - we should **NOT** cache index.html on s3 (use CloudFront cache defauls)
🔳  📡 Use service workers (z2h and academy) 
       You’ll also need a kill switch.
         HTTP GET /version.txt
         if what you get does not match what you have, run this:
         navigator.serviceWorker.getRegistrations().then(function(registrations) {
           for(let registration of registrations) {registration.unregister()} 
         })
         Other references:
           https://create-react-app.dev/docs/making-a-progressive-web-app/        
           https://stackoverflow.com/questions/33704791/how-do-i-uninstall-a-service-worker
           https://stackoverflow.com/questions/33986976/how-can-i-remove-a-buggy-service-worker-or-implement-a-kill-switch/38980776 
           https://www.oreilly.com/library/view/building-progressive-web/9781491961643/ch04.html#section_updating_the_sw
🔳  📡 z2h: there is a danglng `eap-details` file on s3.
🔳  📡 z2h: deployment should clean the bucket entirely before pushing new
       stuff. 
  📂 Bug Bash
🔳  🐞 z2h-web there is a hard-coded api.zerotohero.dev link, it should be
       dynamically created based on the build-time env configuration instead.
🔳  🐞 z2h-progress is not building on edge after dependency update
🔳  🐞 z2h-mailer is not building on edge after dependency update
🔳  🐞 z2h-idm is not building on edge after dependency update
🔳  🐞 Login operation in the recent staging is not working for
       staging.zerotohero.dev 

✅🔳

✨ Thanksgiving Break 🦃  
  🏡 Update volkan.io to reflect recent stuff.

––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

✨ Episode 035 (2020-11-22)
  📂 ZeroToHero Platform 
    🐞 z2h-crypo is not building on edge after dependency update
  📂 JavaScript Nuggests
    ☕ Implementing a CSV-to-Array converter.

––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

✨ Episode 034 (2020-11-19)
  📂 Development Environment Setup 
    🔨 Rename all of the `master` branches as `main`.
    🔨 Get rid of the `edge` branch; use proper tagging instead.

––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

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

––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

✨ Episode 032 (2020-11-17)
  📂 ZeroToHero Platform 
    🦄 /logout API implementation
  📂 Code Challenge
    🧩 Circular loop detection in a linked list 
  📂 Practice Time
    🚀 Using PubNub to trigger a remote deployment 

––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

✨ Backlog 
  🧩 BFS / DFS in trees and graphs
  🧩 Finding the “minimum cut” in a flow graph 
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
  🦆 https://volkan.io
  🦆 https://academy.zerotohero.dev/community/volkan--uses
  🦆 a write-up about my streaming setup
  🦆 move closed AMA topics to z2h academy
  🦆 https://github.com/v0lkan/ama/issues/9
  🦆 @@content_to_update in Obsidian 

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

```

