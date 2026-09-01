import re
d = open('src/translations.ts', encoding='utf-8').read()

# Find all articles for Aug 25, 26, 27
for date in ['2026-08-25', '2026-08-26', '2026-08-27']:
    ids = re.findall(r"id: '(\d+)'.*?date: '%s'" % date, d, re.DOTALL)
    print(f"{date}: {len(ids)} articles -> IDs: {', '.join(ids)}")

# Check total article count
all_ids = re.findall(r"id: '(\d+)'", d)
print(f"\nTotal articles: {len(all_ids)}")

# Check what images articles 1106-1133 use (all from Aug 25-27)
print("\n--- Articles Aug 25-27 image analysis ---")
for aid in ['1106','1107','1108','1109','1110','1111','1112','1113','1114','1115','1116','1117','1118','1119','1120','1121','1122','1123','1124','1125','1126','1127','1128','1129','1130','1131','1132','1133']:
    m = re.search(r"id: '%s'.*?imageUrl: '([^']+)'" % aid, d, re.DOTALL)
    if m:
        print(f"  {aid}: {m.group(1)}")
