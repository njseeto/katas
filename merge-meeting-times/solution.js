const mergeRanges = (meetings) => {

    // sort the meetings array
    const sortedMeetingTimes = meetings.sort((a,b) => {
        return a.startTime - b.startTime
        })

    // Initialise the merged meetings array with the first meeting - this will hold our results
    const mergedMeetings = [sortedMeetingTimes[0]]

    // Loop through each meeting object in the array
    for (let i = 1; i < sortedMeetings.length; i++ ){
        const currentMeeting = sortedMeetingTimes[i]
        const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1]

        // Check it there is an overlap in meeting times
        if(currentMeeting.startTime <= lastMergedMeeting.endTime){

            // If there is an overlap, use the bigger meeting time
            lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime)
        } else {
            
            // if there is no overlap, put the current meeting object into the results array
            mergedMeetings.push(currentMeeting)
        }
    }
    
    return mergedMeetings
}

module.exports = mergeRanges