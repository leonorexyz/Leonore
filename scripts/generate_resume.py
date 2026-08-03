from pathlib import Path

from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import KeepTogether, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "hengki-pranoto-resume.pdf"
PUBLIC = ROOT / "apps" / "web" / "public" / "resume" / "hengki-pranoto-resume.pdf"

INK = HexColor("#102122")
MUTED = HexColor("#425354")
ACCENT = HexColor("#E55D42")
PAPER = HexColor("#FBFAF6")
LINE = HexColor("#D8D5CB")


def bullet(text: str, style: ParagraphStyle) -> Paragraph:
    return Paragraph(f"<font color='#E55D42'>•</font> {text}", style)


def build(path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(
        str(path),
        pagesize=A4,
        rightMargin=17 * mm,
        leftMargin=17 * mm,
        topMargin=14 * mm,
        bottomMargin=14 * mm,
        title="Hengki Pranoto - Solution Architect Resume",
        author="Hengki Pranoto",
        subject="Public Solution Architect resume",
    )
    styles = getSampleStyleSheet()
    title = ParagraphStyle("Title", parent=styles["Title"], fontName="Helvetica-Bold", fontSize=27, leading=29, textColor=INK, alignment=TA_LEFT, spaceAfter=2 * mm)
    role = ParagraphStyle("Role", parent=styles["Normal"], fontName="Helvetica", fontSize=12, leading=15, textColor=ACCENT, spaceAfter=4 * mm)
    heading = ParagraphStyle("Heading", parent=styles["Heading2"], fontName="Helvetica-Bold", fontSize=9.2, leading=11, textColor=INK, spaceBefore=3.2 * mm, spaceAfter=2 * mm, uppercase=True)
    body = ParagraphStyle("Body", parent=styles["BodyText"], fontName="Helvetica", fontSize=8.7, leading=12.2, textColor=MUTED, spaceAfter=1.5 * mm)
    small = ParagraphStyle("Small", parent=body, fontSize=7.6, leading=10.3)
    label = ParagraphStyle("Label", parent=body, fontName="Helvetica-Bold", fontSize=7.3, leading=9, textColor=INK, uppercase=True)

    story = [
        Paragraph("HENGKI PRANOTO", title),
        Paragraph("Solution Architect", role),
        Table(
            [[Paragraph("Tangerang, Indonesia", small), Paragraph("Remote and international collaboration", small), Paragraph("github.com/leonorexyz", small)]],
            colWidths=[55 * mm, 70 * mm, 51 * mm],
            style=TableStyle([
                ("BACKGROUND", (0, 0), (-1, -1), PAPER),
                ("BOX", (0, 0), (-1, -1), .5, LINE),
                ("INNERGRID", (0, 0), (-1, -1), .5, LINE),
                ("LEFTPADDING", (0, 0), (-1, -1), 6),
                ("RIGHTPADDING", (0, 0), (-1, -1), 6),
                ("TOPPADDING", (0, 0), (-1, -1), 6),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
            ]),
        ),
        Paragraph("PROFILE", heading),
        Paragraph("I design pragmatic enterprise systems that balance delivery speed, operational resilience, security, and long-term maintainability. More than seven years of enterprise delivery experience across BFSI, manufacturing, and oil and gas environments.", body),
        Paragraph("VERIFIED IMPACT", heading),
        Table(
            [
                [Paragraph("7+ YEARS", label), Paragraph("4-MONTH DELIVERY", label), Paragraph("1 LEAD + 3 DEVELOPERS", label)],
                [Paragraph("Solution architecture and enterprise delivery", small), Paragraph("Highlighted BFSI product launch window", small), Paragraph("Lean core delivery team", small)],
            ],
            colWidths=[58.7 * mm, 58.7 * mm, 58.7 * mm],
            style=TableStyle([
                ("BACKGROUND", (0, 0), (-1, -1), PAPER),
                ("BOX", (0, 0), (-1, -1), .5, LINE),
                ("INNERGRID", (0, 0), (-1, -1), .5, LINE),
                ("LEFTPADDING", (0, 0), (-1, -1), 7),
                ("RIGHTPADDING", (0, 0), (-1, -1), 7),
                ("TOPPADDING", (0, 0), (-1, -1), 6),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
            ]),
        ),
        Paragraph("SELECTED CASE STUDY", heading),
        KeepTogether([
            Paragraph("BFSI digital product delivered against a fixed launch window", ParagraphStyle("Case", parent=body, fontName="Helvetica-Bold", fontSize=10.5, leading=13, textColor=INK)),
            Paragraph("An anonymized financial-services product had to launch for a fixed event within four months. The client environment relied on waterfall delivery, siloed teams, and manual processes.", body),
            bullet("Restructured architecture and delivery boundaries for a team of one technical lead and three developers.", body),
            bullet("Prioritized launch-critical capability, shorter validation checkpoints, operational readiness, and recovery planning.", body),
            bullet("Delivered within the documented four-month window; no unsupported business, scale, or performance metrics are claimed.", body),
        ]),
        Paragraph("CAPABILITIES", heading),
        Table(
            [
                [Paragraph("Solution and system architecture", label), Paragraph("Delivery and technical governance", label)],
                [Paragraph("Infrastructure and platform operations", label), Paragraph("Observability and performance", label)],
                [Paragraph("Technical enablement and training", label), Paragraph("AI and workflow automation", label)],
            ],
            colWidths=[88 * mm, 88 * mm],
            style=TableStyle([
                ("BOX", (0, 0), (-1, -1), .5, LINE),
                ("INNERGRID", (0, 0), (-1, -1), .5, LINE),
                ("LEFTPADDING", (0, 0), (-1, -1), 7),
                ("RIGHTPADDING", (0, 0), (-1, -1), 7),
                ("TOPPADDING", (0, 0), (-1, -1), 7),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
            ]),
        ),
        Paragraph("ARCHITECTURE APPROACH", heading),
        bullet("Architecture must be deliverable by the available team.", body),
        bullet("Production change needs an explicit and tested recovery path.", body),
        bullet("Complexity must address a demonstrated constraint and measurable value.", body),
        bullet("Monitoring, logging, alerting, incident response, and ownership are part of architecture.", body),
        bullet("AI systems keep identity, authorization, moderation, and consequential actions deterministic and human-approved.", body),
        Spacer(1, 2 * mm),
        Paragraph("PUBLIC DISCLOSURE NOTE", heading),
        Paragraph("This concise public resume intentionally omits employer names, client identities, confidential topology, personal address, phone number, and outcomes that have not completed evidence and disclosure review. Current portfolio: leonorekingdom.xyz", small),
    ]
    doc.build(story)


if __name__ == "__main__":
    build(OUTPUT)
    PUBLIC.parent.mkdir(parents=True, exist_ok=True)
    PUBLIC.write_bytes(OUTPUT.read_bytes())
    print(OUTPUT)
    print(PUBLIC)
