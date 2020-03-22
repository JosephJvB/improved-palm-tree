# Yo

Im trying to learn aws lambdas. What have we got so far?
Mostly about: how to set up lambdas locally
I clicked thru making a lambda on aws console - that was easy enough

### Local
Local boils down to the tool you choose.
SAM seems like the main aws package, Serverless seems like the cool kids package
Both require a .yml file for configuration
- [aws sam cli](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)
    - PRO: can run a host same as `func host start`
    - CON: config sux so when I dont know what im doing its hard to create valid yml
    - PRO: config works if you generate the yml with the cli
    - CON: Requires running docker daemon
    - CON: simple GET takes 6s
- [serverless cli](https://serverless.com/framework/docs/providers/aws/cli-reference/)
    - PRO: seems like most of the examples I found were using it - popular.
    - CON: cant run function host, can only invoke one function at a time
    - PRO: can use plugins that can host functions
    - CON: host plugin doesnt support dotnet core
    - QUESTIONS
        - does it need docker desktop running?
        - how fast is serverless offline plugin? (with compatable project: ie, not dotnet core)

What did I REALLY learn about AWS Lambda / Azure Functions?
- Developer tool experience
- Know what tools you need going in, if you dont know them, then find them first.
    - Blind learning curve like that makes me want to stick to the tools I know haha


Another thought I had: Google AWS Microsoft, big three western software companies. Each has their own cloud services - developer focused. Microsoft and Google have their own programming languages, AWS doesnt? I wonder if they would create one.

Maybe I should have started with this one:
https://www.youtube.com/watch?v=bih5b3C1nqc

I think watching someone do setup for the first time is good
THEN you can start reading the docs

Hey how is this for an idea.
Nodejs is C++
What if I rewrote a simple node project I have - but in C++
has to be a simple nodejs project tho, no external packages, file system operations only