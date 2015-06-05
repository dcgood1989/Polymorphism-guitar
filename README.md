# Setup Instructions

Install [Jasmine](http://jasmine.github.io/2.3/introduction.html) via `npm install -g jasmine`. Then fork and clone this repository.

# How to use

`cd` into the directory where you cloned your fork of this repository, `npm install`, then `jasmine`.

# Details

Suppose you are trying to model an artificially intelligent agent for a guitar store where customers can call in and order a guitar. In particular, you are working on a feature that allows a user to browse the guitar inventory by first answering a few questions based on the characteristics of various guitars. Those questions are:

  1. Do you want an electric guitar, an acoustic guitar, or a bass guitar?
  1. How many strings should the selected guitar have?
  1. What hand should the selected guitar be? (e.g. Left or Right)

At all points, if a user provides an invalid selection the response will be a cordial denial that the store does not offer that service.

To implement this user interface, you must statisfy all of the specs in the `spec/` directory, which together form the polymorphic interface used by the intelligent agent. To see it in action in the terminal, run `node guitarSalesAI.js`.

# How to approach

Start by going through each of the specs, starting with `guitar_spec.js`. After the first one, order is less important. Implement each constructor to the point that it works, then once you've compeleted all of the implementations, look for ways to refactor to use the prototype, `Guitar`, more. Run the specs one file at a time.

## Techniques Involved

A powerful technique in Object Oriented Programming (OOP) is to model situations by breaking out the various cases into objects representing that case. In this exercise we use inheritance of a base, `Guitar`, class, to implement every method for the interface a guitar will have for the automated phone system. Next we create specific types of guitars for this store; `ElectricGuitar`, `BassGuitar`, `AcousticGuitar`, each of which _override_ the interface provided by `Guitar` (via prototypal inheritance) with their own values, while maintaining the contract provided by the `Guitar` interface (that is, keeping the method names the same).

### Looking for a Challenge? Have free time?

1. Refactor the specs.

1. Make this code part of the backend for a service that simulates a phone call with the intelligent agent in the browser, using speech recognition to interpret the user's response to the prompts.