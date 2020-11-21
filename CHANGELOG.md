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
Episode 033 Link Queue
https://twitter.com/linkibol/status/1329524008174305282
https://en.wikipedia.org/wiki/Command%E2%80%93query_separation
https://www.shure.com/en-US/products/microphones/sm7b
https://www.audio-technica.com/en-us/at2020
https://kroki.io/

💁 I need more backlog items, in case I run out of items to cover in the
session.



---
💁 tl:dr;
   I’m renaming all my `master` branches to `main` branches.
---


Guess, I’ll call it a night.
Putting kids to bed will take “forever” and then I’ll likely be
exhausted AF.
Thanks everyone for joining in.
Have a good day,
and may the source be with you 🦄.





















---------
Okay, I’m back.

I’m plannig to fix as many bugs from the below bucket as I can tonight.
^ but even before that I want to do something:
something that I had been planning for a long time but deferring as “grunt
work”.
I will rename all of the `master` branches in all zerotohero.dev repos as
`main`.
^ That will be a better and more inclusive name for the branch.
Everything starts with the language: You change the language, you change people.
Language is powerful — Ideas “are” powerful.
So let’s get this thing rolling.

--
I’ll also back up my projects folders -- 
just in case I make a level8 error :)
--
Action plan:
For every repo I have… I’ll commit any pending local changes, do the merge 
from edge to master. delete edge branches (that’s another story) -- and then
do the rename.

I'll also have to update my ci/cd scripts. so it's not something straighforward.




My camera and mic will be off. I’ll be monitoring the chat.

  📂 Bug Bash
		🐞 z2h-web there is a hard-coded api.zerotohero.dev link, it should be
       dynamically created based on the build-time env configuration instead.
		🐞 z2h-progress is not building on edge after dependency update
		🐞 z2h-mailer is not building on edge after dependency update
		🐞 z2h-idm is not building on edge after dependency update
		🐞 z2h-crypo is not building on edge after dependency update
		🐞 Login operation in the recent staging is not working for
		   staging.zerotohero.dev 
  📂 Development Environment Setup 
    🔨 Rename all of the “master” branches as “main”.
    🔨 Get rid of the `edge` branch; use proper tagging instead. 












✨ Episode 034 (2020-11-21)

--------------------------------------------------------------------------------

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

--------------------------------------------------------------------------------

✨ Episode 032 (2020-11-17)
  📂 ZeroToHero Platform 
    🦄 /logout API implementation
  📂 Code Challenge
    🧩 Circular loop detection in a linked list 
  📂 Practice Time
    🚀 Using PubNub to trigger a remote deployment 

--------------------------------------------------------------------------------

✨ ZeroToHero.dev High-Level Top Three 
  🔥 There are build errors and login issues on staging.
  🔥 Finalize the existing lesson notes.

✨ Backlog 
  🧩 BFS / DFS in trees and graphs
  🧩 Finding the “minimum cut” in a flow graph 
  🚀 create a mechanism to disable cloudfront if traffic is abnormally high.
  🚀 have a non-cloudfront ec2-based backup option for static content. 
  🚀 enable service workers. 

  🔬 study.zerotohero.dev
  📡 Overwiew current z2h AWS WAF settings
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

