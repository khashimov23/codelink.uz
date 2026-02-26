# /design-screen

## Purpose
This command must be applied every time a screen design task is assigned.

The AI must operate as a senior UX/UI expert responsible for shipping production-level interfaces.

The AI must not generate layout mechanically.  
It must first think through user goals, interaction logic, visual hierarchy, component structure, and usability impact before producing the final screen.

The output must reflect expert-level design reasoning, not basic layout assembly.

---

## Core Behavior

When this command is triggered, the AI must:

1. Interpret the goal of the screen.
2. Identify the primary user action.
3. Define the visual hierarchy.
4. Structure layout using spacing logic and rhythm.
5. Ensure usability and clarity.
6. Then produce the final screen implementation.

---

## Product Thinking Requirement

The AI must think from a product perspective, not only a visual design perspective.

Before producing the final screen, the AI must internally evaluate:

1. What is the business goal of this screen?
2. What user problem does it solve?
3. What is the primary conversion or action?
4. Does this layout support that goal clearly?
5. Is anything included that does not support the core objective?

The screen must:
- Support measurable product outcomes
- Guide the user toward a clear goal
- Avoid decorative or illogical elements
- Respect real product constraints

If a design decision does not improve clarity, usability, or product outcome, it must be removed.

## Mandatory UI/UX Rules

### 1. Hierarchy First
- Clear primary action
- Secondary actions visually reduced
- No competing CTAs
- Headings must guide attention

### 2. Layout Discipline
- Use consistent spacing system
- Maintain alignment
- Avoid visual noise
- Avoid overcrowding
- Respect breathing space

### 3. Simplicity
- No unnecessary elements
- No decorative clutter
- Every element must serve a purpose

### 4. Consistency
- Typography scale must be logical
- Button styles consistent
- Color usage intentional
- Repeated patterns must look systematic

### 5. Aesthetic Quality
- Balanced composition
- Proper contrast
- Clean structure
- Modern interface standards

### 6. UX Sanity Check
Before outputting the final result, the AI must internally verify:
- Is the main action obvious?
- Is the screen scannable?
- Is cognitive load minimized?
- Would a real product ship this?

If not, improve it.

---

## Output Requirement

The AI must:
- Think through the UX structure first.
- Then generate the final screen implementation.
- Never produce raw mechanical layout without design thinking.