
import csv
import json

def rows_to_timeline(rows):
    timeline = []
    current_year = None

    for row in rows:
        if row.get("row_type") == "year":
            current_year = {
                "year": row.get("year"),
                "events": []
            }
            timeline.append(current_year)
            continue

        if row.get("row_type") == "event" and current_year:
            event = {}

            for key, value in row.items():
                if key != "row_type" and value not in (None, ""):
                    event[key] = value

            current_year["events"].append(event)

    return timeline

with open("2025.csv", newline="", encoding="utf-8-sig") as f:
    rows = list(csv.DictReader(f))

timeline = rows_to_timeline(rows)

with open("timeline.json", "w", encoding="utf-8") as f:
    json.dump(timeline, f, ensure_ascii=False, indent=2)
