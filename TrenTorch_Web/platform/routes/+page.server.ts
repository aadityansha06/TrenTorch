import { potdEntries } from '$data/potd';
import { questionsById } from '$processes/ide-content/curriculum-index';
import { toPotdSummary } from '$processes/potd/potd-summary';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => ({
  potdSummaries: potdEntries.flatMap((entry) => {
    const question = questionsById.get(entry.questionId);
    return question ? [toPotdSummary(question)] : [];
  })
});
