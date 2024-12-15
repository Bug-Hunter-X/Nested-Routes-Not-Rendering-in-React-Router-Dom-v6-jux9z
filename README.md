# React Router Dom v6 Nested Route Issue

This repository demonstrates a common issue encountered when using nested routes in React Router Dom v6.  The problem arises when nested routes fail to render even with seemingly correct configurations. This example showcases the issue and provides a solution.

## Problem

The provided `App.js` demonstrates a simple setup with nested routes. Despite the routes being correctly defined, the nested components do not render when navigating to their parent routes.  This can lead to unexpected behavior and broken functionality in applications.

## Solution

The solution provided addresses this issue by ensuring proper route definitions and potentially using the `useLocation` hook to help correctly render pages. Check `bugSolution.js` for the fix.
