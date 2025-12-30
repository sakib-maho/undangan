# Countdown Logic Issues Analysis

## Issues Found

### 1. **Timezone Problem** ⚠️
**Location**: `undangan/js/app/guest/guest.js:33`

```javascript
const count = (new Date(document.body.getAttribute('data-time').replace(' ', 'T'))).getTime();
```

**Problem**: 
- Date string `"2026-01-17 11:00:00"` has no timezone specification
- When parsed, JavaScript interprets it in the **user's local timezone**
- If the wedding is at 11:00 AM JST (Japan Standard Time), but a user in New York views it, they'll see a different countdown

**Example**:
- Wedding time: `2026-01-17 11:00:00` (intended as JST)
- User in New York (EST, UTC-5): Sees it as `2026-01-17 11:00:00 EST` = `2026-01-17 16:00:00 UTC`
- User in Tokyo (JST, UTC+9): Sees it as `2026-01-17 11:00:00 JST` = `2026-01-17 02:00:00 UTC`
- **Result**: Different countdowns for different users!

### 2. **Math.abs() Issue** ⚠️
**Location**: `undangan/js/app/guest/guest.js:47`

```javascript
const distance = Math.abs(count - Date.now());
```

**Problem**:
- `Math.abs()` makes the difference always positive
- After the event passes, the countdown will **count UP** instead of stopping at 0
- Should show 0 or a message when the event has passed

**Example**:
- Event time: Jan 17, 2026 11:00 AM
- Current time: Jan 18, 2026 10:00 AM
- Distance: -23 hours
- With `Math.abs()`: Shows 23 hours (wrong - event already passed!)

### 3. **Date Format Parsing** ⚠️
**Location**: `undangan/js/app/guest/guest.js:33`

```javascript
.replace(' ', 'T')
```

**Problem**:
- Converts `"2026-01-17 11:00:00"` to `"2026-01-17T11:00:00"`
- This is ISO 8601 format but **without timezone** = ambiguous
- Should include timezone (e.g., `"2026-01-17T11:00:00+09:00"` for JST)

## Current Implementation

```javascript
const countDownDate = () => {
    const count = (new Date(document.body.getAttribute('data-time').replace(' ', 'T'))).getTime();
    
    const updateCountdown = () => {
        const distance = Math.abs(count - Date.now());
        
        day.textContent = pad(Math.floor(distance / (1000 * 60 * 60 * 24)));
        hour.textContent = pad(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        minute.textContent = pad(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
        second.textContent = pad(Math.floor((distance % (1000 * 60)) / 1000));
        
        util.timeOut(updateCountdown, 1000 - (Date.now() % 1000));
    };
    
    util.timeOut(updateCountdown);
};
```

## Recommended Fixes

### Fix 1: Add Timezone Support
Specify timezone in the date string:
- Change `data-time="2026-01-17 11:00:00"` 
- To: `data-time="2026-01-17T11:00:00+09:00"` (for JST)

### Fix 2: Handle Past Events
Remove `Math.abs()` and handle negative values:
- If event passed: Show 0 or a message
- If event future: Show countdown

### Fix 3: Better Date Parsing
Parse with explicit timezone handling

## Impact

- **High**: Users in different timezones see different countdowns
- **Medium**: After event passes, countdown counts up incorrectly
- **Low**: Date parsing ambiguity could cause edge cases
