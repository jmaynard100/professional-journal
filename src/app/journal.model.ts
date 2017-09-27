export class Journal {
    _id: string;
    journalName: string;
    userId: string;
    date: Date;
    journalSummary: string;
    journalEntry: Array<JournalEntry>;
}

export class JournalEntry {
    title: string;
    content: string;
    createdAt: Date;
    lastUpdated: Date;
    hidden: Boolean;
    deleted: Boolean;
    entryHistory: Array<EntryHistory>;
}

export class EntryHistory {
    date: Date;
    content: string;
    hidden: Boolean;
    deleted: Boolean;
    reasonSummary: string;
}
