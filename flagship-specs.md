# 10 Flagship Utility Specifications

## 1. Thought Untangler

**Goal:** Transform rambling thoughts into structured insights through voice or text input, creating visual mind maps and actionable summaries.

**Inputs/Outputs:**
- Input: Stream of consciousness text or voice recording
- Output: Structured mind map, key themes, action items, and insights

**Interaction Flow:**
1. User clicks "Start Untangling"
2. Speaks or types stream of consciousness
3. System processes in real-time, identifying themes
4. Visual map grows organically showing connections
5. User can reorganize nodes
6. Export structured summary

**Core Logic:**
- Natural language processing to identify entities, themes, and relationships
- Clustering algorithm to group related concepts
- Sentiment analysis to identify emotional threads
- Priority detection for actionable items

**Visualization/Feedback:**
- Animated node graph that grows as user speaks/types
- Color coding for different theme categories
- Connection strength shown through line thickness
- Real-time keyword highlighting

**Persistence Schema:**
- Sessions stored with timestamp
- Node positions and connections
- Extracted themes and action items
- Audio/text transcript

**Capability Detection & Fallback:**
- If Web Audio API available: Voice input with visualization
- Fallback: Text-only input with static diagram generation

**Accessibility Notes:**
- Full keyboard navigation through nodes
- Screen reader descriptions of connections
- High contrast mode for visual elements
- Text alternatives for all visual information

**Risks/Limitations:**
- Processing complexity for very long inputs
- Potential misinterpretation of context
- Privacy concerns with voice data (all processing local)

## 2. Memory Palace Builder

**Goal:** Create spatial memory aids by transforming any list into a navigable 3D environment where items are placed in memorable locations.

**Inputs/Outputs:**
- Input: List of items to memorize
- Output: Interactive 3D/2D space with items placed memorably

**Interaction Flow:**
1. User inputs list of items
2. Selects palace theme (house, garden, castle, etc.)
3. System generates rooms/spaces
4. Items automatically placed with memorable associations
5. User navigates through space
6. Practice mode tests recall

**Core Logic:**
- Spatial layout generation based on item count
- Mnemonic association algorithm
- Distinctive placement logic (unusual = memorable)
- Spaced repetition scheduling for practice

**Visualization/Feedback:**
- 3D first-person navigation (WebGL)
- 2D floor plan overview
- Item highlighting on hover/focus
- Progress tracking for memorization

**Persistence Schema:**
- Palace layouts and item placements
- Practice history and success rates
- Custom room modifications
- Multiple palaces per user

**Capability Detection & Fallback:**
- If WebGL available: Full 3D experience
- Fallback: 2D isometric view with click navigation

**Accessibility Notes:**
- Keyboard arrow navigation
- Audio descriptions of rooms and items
- List view alternative to spatial view
- Configurable movement speed

**Risks/Limitations:**
- Performance on low-end devices
- Learning curve for method
- Limited to list-based information

## 3. Habit Harmonics

**Goal:** Find the resonant frequency of habit formation by tracking attempts and discovering personal rhythm patterns for sustainable habits.

**Inputs/Outputs:**
- Input: Habit attempts, success/failure logs
- Output: Optimal timing patterns, success predictions

**Interaction Flow:**
1. User defines habit goal
2. Logs each attempt with context
3. System detects patterns over time
4. Generates personalized rhythm recommendation
5. Provides audio/visual cues at optimal times
6. Adapts based on ongoing success

**Core Logic:**
- Pattern recognition in time series data
- Circadian rhythm alignment
- Context correlation (weather, mood, etc.)
- Harmonic frequency calculation

**Visualization/Feedback:**
- Musical visualization of habit rhythm
- Success rate heat map by time/day
- Predictive success indicator
- Harmonic resonance animation

**Persistence Schema:**
- Habit definitions and history
- Success/failure logs with context
- Detected patterns and predictions
- Notification preferences

**Capability Detection & Fallback:**
- If Web Audio available: Musical feedback
- Fallback: Visual rhythm patterns only

**Accessibility Notes:**
- Non-audio alternatives for all sounds
- Tactile feedback option (vibration)
- Clear text descriptions of patterns
- Keyboard shortcuts for logging

**Risks/Limitations:**
- Requires consistent logging for accuracy
- Individual variation in patterns
- External factors may override patterns

## 4. Decision Dice

**Goal:** Overcome analysis paralysis by rolling weighted dice based on confidence levels, making minor decisions fun and fast.

**Inputs/Outputs:**
- Input: Options with confidence weights
- Output: Weighted random selection with explanation

**Interaction Flow:**
1. User adds 2-6 options
2. Sets confidence level for each (slider)
3. Optional: Add pro/con factors
4. Rolls the weighted dice
5. See visual dice roll animation
6. Get result with confidence breakdown

**Core Logic:**
- Weighted probability calculation
- Confidence normalization
- Visual physics simulation
- Historical decision tracking

**Visualization/Feedback:**
- 3D dice animation with physics
- Probability pie chart
- Confidence meter for each option
- Roll history timeline

**Persistence Schema:**
- Past decisions and outcomes
- Option templates for common decisions
- Personal confidence calibration
- Decision satisfaction tracking

**Capability Detection & Fallback:**
- If Canvas available: Animated dice
- Fallback: Simple random selection with percentages

**Accessibility Notes:**
- Keyboard control for all inputs
- Audio announcement of results
- High contrast mode
- Reduced motion option

**Risks/Limitations:**
- Not suitable for major decisions
- May encourage decision avoidance
- Randomness anxiety for some users

## 5. Focus Frequency Finder

**Goal:** Discover personalized optimal work/rest intervals by tracking performance and automatically adjusting timing recommendations.

**Inputs/Outputs:**
- Input: Work session quality ratings, distraction logs
- Output: Personalized interval recommendations

**Interaction Flow:**
1. Start with standard 25/5 minute intervals
2. Work with built-in timer
3. Rate focus quality after each session
4. Log distractions if they occur
5. System adjusts recommendations
6. Shows optimal pattern emerging

**Core Logic:**
- Performance curve analysis
- Distraction pattern detection
- Energy level correlation
- Adaptive interval adjustment

**Visualization/Feedback:**
- Focus wave visualization
- Performance trend charts
- Optimal zone indicators
- Real-time focus quality meter

**Persistence Schema:**
- Session history with ratings
- Distraction types and frequency
- Emerging optimal patterns
- Daily/weekly performance trends

**Capability Detection & Fallback:**
- If Performance API available: Precise timing
- Fallback: Manual time tracking

**Accessibility Notes:**
- Audio cues for interval changes
- Visual and vibration alerts
- Keyboard shortcuts for ratings
- Screen reader friendly timers

**Risks/Limitations:**
- Requires consistent usage for accuracy
- External factors affect focus
- Individual variation is high

## 6. Emotional Weather Map

**Goal:** Track mood patterns using weather metaphors, making emotional awareness intuitive and patterns visible.

**Inputs/Outputs:**
- Input: Mood selections using weather symbols
- Output: Weather pattern forecasts, storm warnings

**Interaction Flow:**
1. Select current emotional weather
2. Add optional intensity/notes
3. View personal weather map
4. See patterns over time
5. Get weather forecasts based on patterns
6. Storm warning for difficult patterns

**Core Logic:**
- Mood state transitions mapping
- Pattern recognition algorithms
- Predictive modeling
- Trigger correlation analysis

**Visualization/Feedback:**
- Animated weather map
- Pressure systems for mood influences
- Temperature gradients for energy
- Storm tracking for difficult periods

**Persistence Schema:**
- Mood history with timestamps
- Trigger events and correlations
- Pattern predictions
- Intervention strategies

**Capability Detection & Fallback:**
- If Canvas available: Full weather animation
- Fallback: Simple icon-based display

**Accessibility Notes:**
- Weather described in text
- Keyboard navigation for all controls
- High contrast weather symbols
- Audio weather reports option

**Risks/Limitations:**
- Oversimplification of emotions
- May increase mood focus
- Weather metaphor limitations

## 7. Energy Accountant

**Goal:** Track energy income/expenses using financial metaphors, making energy management concrete and actionable.

**Inputs/Outputs:**
- Input: Energy transactions (gains/drains)
- Output: Energy balance sheet, budget recommendations

**Interaction Flow:**
1. Log energy income (sleep, food, exercise)
2. Log energy expenses (work, stress, activities)
3. View current balance
4. See energy cash flow
5. Get budget recommendations
6. Set energy saving goals

**Core Logic:**
- Energy conversion rates
- Balance calculation
- Deficit/surplus tracking
- Optimization suggestions

**Visualization/Feedback:**
- Balance sheet visualization
- Energy flow diagram
- Red/green indicators
- Trend charts

**Persistence Schema:**
- Transaction history
- Energy account balance
- Categories and tags
- Goals and budgets

**Capability Detection & Fallback:**
- If Canvas available: Interactive charts
- Fallback: Table-based display

**Accessibility Notes:**
- Keyboard accessible forms
- Screen reader friendly tables
- Audio balance announcements
- Clear labeling of all elements

**Risks/Limitations:**
- Quantification oversimplification
- Individual energy variations
- Measurement subjectivity

## 8. Task Topology

**Goal:** Visualize task dependencies as topographical landscapes, making project complexity intuitive through elevation and terrain.

**Inputs/Outputs:**
- Input: Tasks with dependencies and effort estimates
- Output: 3D/2D topographical map of project landscape

**Interaction Flow:**
1. Add tasks as terrain features
2. Connect dependencies as paths
3. Set effort as elevation
4. View generated landscape
5. Navigate optimal paths
6. Track progress as exploration

**Core Logic:**
- Dependency graph layout
- Elevation mapping from effort
- Critical path calculation
- Progress tracking overlay

**Visualization/Feedback:**
- 3D terrain visualization
- Path highlighting
- Progress fog clearing
- Elevation profiles

**Persistence Schema:**
- Project landscapes
- Task completion status
- Path history
- Milestone markers

**Capability Detection & Fallback:**
- If WebGL available: 3D terrain
- Fallback: 2D topographical map

**Accessibility Notes:**
- Keyboard navigation
- Task list alternative view
- Audio descriptions of paths
- High contrast mode

**Risks/Limitations:**
- Complexity for large projects
- Learning curve for metaphor
- Performance with many tasks

## 9. Relationship Constellation

**Goal:** Map social energy flows as a living constellation, showing relationship dynamics and energy balance.

**Inputs/Outputs:**
- Input: People, interaction frequency, energy exchange
- Output: Dynamic constellation map with energy flows

**Interaction Flow:**
1. Add people as stars
2. Set relationship type/strength
3. Log energy exchanges
4. View constellation dynamics
5. See energy balance warnings
6. Get relationship insights

**Core Logic:**
- Force-directed graph layout
- Energy flow calculation
- Balance detection
- Relationship health metrics

**Visualization/Feedback:**
- Animated star map
- Energy flow streams
- Brightness for relationship health
- Orbital patterns for regular contacts

**Persistence Schema:**
- People and relationships
- Interaction history
- Energy exchange logs
- Pattern insights

**Capability Detection & Fallback:**
- If Canvas available: Full animation
- Fallback: Static network diagram

**Accessibility Notes:**
- List view of relationships
- Keyboard navigation
- Screen reader descriptions
- High contrast mode

**Risks/Limitations:**
- Relationship oversimplification
- Privacy sensitivity
- Subjective energy assessment

## 10. Time Texture

**Goal:** Feel how time is spent through haptic and visual patterns, making time usage tangible and immediate.

**Inputs/Outputs:**
- Input: Time block categories and durations
- Output: Textured patterns representing time quality

**Interaction Flow:**
1. Define time block types
2. Assign textures to categories
3. Log time blocks
4. Feel/see texture patterns
5. Identify smooth vs rough periods
6. Optimize for preferred textures

**Core Logic:**
- Texture generation algorithms
- Pattern complexity calculation
- Time quality scoring
- Optimization suggestions

**Visualization/Feedback:**
- Visual texture patterns
- Haptic feedback patterns
- Texture complexity meter
- Day/week texture overview

**Persistence Schema:**
- Time block history
- Texture preferences
- Pattern associations
- Quality scores

**Capability Detection & Fallback:**
- If Vibration API available: Haptic feedback
- Fallback: Visual patterns only

**Accessibility Notes:**
- Visual texture descriptions
- Keyboard time entry
- Audio pattern representation
- High contrast patterns

**Risks/Limitations:**
- Device haptic limitations
- Subjective texture preferences
- Battery usage for haptics