const applications = [
    { id: 1, submittedAt: "2024-10-01", processingDays: 5 },
    { id: 2, submittedAt: "2024-10-03", processingDays: 2 },
    { id: 3, submittedAt: "2024-10-05", processingDays: 10 }   
]

function getOverdueApplications(applications) {
    const today = "2024-10-10";

    return applications.map(application => {
        const submissionDate = new Date(application.submittedAt);

        const applicationProcessingTime = new  Date(submissionDate);
        applicationProcessingTime.setDate(submissionDate.getDate() + application.processingDays);

        return {
            id: application.id,
            expectedCompletionDate: applicationProcessingTime.toISOString().split("T")[0],
        }
    }).filter(application => {
        const expectedCompletionDate = new Date(application.expectedCompletionDate);
        const todayDate = new Date("2024-10-10");
        return expectedCompletionDate < todayDate;
    });



}

console.log(getOverdueApplications(applications));