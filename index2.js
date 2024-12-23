csvData = `
BASIC@Accounting@"""Walk me through the 3 financial statements."""@"""The 3 major financial statements are the Income Statement, Balance Sheet and
Cash Flow Statement.
The Income Statement shows the company’s revenue and expenses over a period
of time, and goes down to Net Income, the final line on the statement.
The Balance Sheet shows the company’s Assets – its resources – such as Cash,
Inventory and PP&E, as well as its Liabilities – such as Debt and Accounts
Payable – and Shareholders’ Equity – at a specific point in time. Assets must
equal Liabilities plus Shareholders’ Equity.
The Cash Flow Statement begins with Net Income, adjusts for non-cash expenses
and changes in operating assets and liabilities (working capital), and then shows
how the company has spent cash or received cash from Investing or Financing
activities; at the end, you see the company’s net change in cash."""
BASIC@Accounting@"""Can you give examples of major line items on each of the financial
statements?"""@"""Income Statement: Revenue; Cost of Goods Sold; SG&A (Selling, General &
Administrative) Expenses; Operating Income; Pre-Tax Income; Net Income.Balance Sheet: Cash; Accounts Receivable; Inventory; Plants, Property &
Equipment (PP&E); Accounts Payable; Accrued Expenses; Debt; Shareholders’
Equity.
Cash Flow Statement: Cash Flow from Operations (Net Income; Depreciation &
Amortization; Stock-Based Compensation; Changes in Operating Assets &
Liabilities); Cash Flow from Investing (Capital Expenditures, Sale of PP&E,
Sale/Purchase of Investments); Cash Flow from Financing (Dividends Issued,
Debt Raised / Paid Off, Shares Issued / Repurchased)"""
BASIC@Accounting@"""How do the 3 statements link together?"""@"""To tie the statements together, Net Income from the Income Statement becomes
the top line of the Cash Flow Statement.
Then, you add back any non-cash charges such as Depreciation & Amortization
to this Net Income number.
Next, changes to operational Balance Sheet items appear and either reduce or
increase cash flow depending on whether they are Assets or Liabilities and
whether they go up or down. That gets you to Cash Flow from Operations.
Now you take into account investing and financing activities and changes to
items like PP&E and Debt on the Balance Sheet; those will increase or decrease
cash flow, and at the bottom you get the net change in cash.
On the Balance Sheet for the end of this period, Cash at the top equals the
beginning Cash number (from the start of this period), plus the net change in
cash from the Cash Flow Statement.
On the other side, Net Income flows into Shareholders’ Equity to make the
Balance Sheet balance.
At the end, Assets must always equal Liabilities plus Equity."""
BASIC@Accounting@"""If I were stranded on a desert island and only had one financial statement
and I wanted to review the overall health of a company, which statement
would I use and why?"""@"""You would use the Cash Flow Statement because it gives a true picture of how
much cash the company is actually generating – the Income Statement is
misleading because it includes non-cash expenses and excludes actual cash
expenses such as Capital Expenditures.
And that’s the #1 thing you care about when analyzing the financial health of any
business – its true cash flow."""
BASIC@Accounting@"""Let’s say I could only look at 2 statements to assess a company’s prospects –
which 2 would I use and why?"""@"""You would pick the Income Statement and Balance Sheet because you can create
the Cash Flow Statement from both of those (assuming that you have
“Beginning” and “Ending” Balance Sheets that correspond to the same period
the Income Statement is tracking)."""
BASIC@Accounting@"""Let’s say I have a new, unknown item that belongs on the Balance Sheet.
How can I tell whether it should be an Asset or a Liability?"""@"""An Asset will result in additional cash or potential cash in the future – think
about how Investments or Accounts Receivable will result in a direct cash
increase, and how Goodwill or PP&E may result in an indirect cash increase in
the future.
A Liability will result in less cash or potential cash in the future – think about
how Debt or Accounts Payable will result in a direct cash decrease, and how
something like Deferred Revenue will result in an indirect cash decrease as you
recognize additional taxes in the future from recognizing revenue.
Ask what direction cash will move in as a result of this new item and that tells
you whether it’s an Asset or Liability."""
BASIC@Accounting@"""How can you tell whether or not an expense should appear on the Income
Statement?"""@"""Two conditions MUST be true for an expense to appear on the IS:
1. It must correspond to something in the current period.
2. It must be tax-deductible.
Employee compensation and marketing spending, for example, satisfy both
conditions.
Depreciation and Interest Expense also meet both conditions – Depreciation only
represents the “loss in value” of PP&E (or to be more technically precise, the
allocation of the investment in PP&E) in the current period you’re in.
Repaying debt principal does not satisfy both of these conditions because it is not
tax-deductible.
Advanced Note: Technically, “tax-deductible” here means “deductible for book
tax purposes” (i.e. only the tax number that appears on the company’s Income
Statement) – see the Advanced Accounting section for more on this topic."""
BASIC@Accounting@""" Let’s say that you have a non-cash expense (Depreciation or Amortization,
for example) on the Income Statement. Why do you add back the entire
expense on the Cash Flow Statement?"""@"""Because you want to reflect that you’ve saved on taxes with the non-cash
expense.
Let’s say you have a non-cash expense of $10 and a tax rate of 40%. Your Net
Income decreases by $6 as a result… but then you add back the entire non-cash
expense of $10 on the CFS so that your cash goes up by $4.That increase of $4 reflects the tax savings from the non-cash expense. If you just
added back the after-tax expense of $6 you’d be saying, “This non-cash expense
has no impact on our taxes or cash balance.”"""
BASIC@Accounting@"""How do you decide when to capitalize rather than expense a purchase?"""@"""If the purchase corresponds to an Asset with a useful life of over 1 year, it is
capitalized (put on the Balance Sheet rather than shown as an expense on the
Income Statement). Then it is Depreciated (tangible assets) or Amortized
(intangible assets) over a certain number of years.
Purchases like factories, equipment and land all last longer than a year and
therefore show up on the Balance Sheet. Employee salaries and the cost of
manufacturing products (COGS) only “last” for the current period and therefore
show up on the Income Statement as normal expenses instead.
Note that even if you’re paying for something like a multi-year lease for a
building, you would not capitalize it unless you own the building and pay for
the entire building in advance."""
BASIC@Accounting@"""If Depreciation is a non-cash expense, why does it affect the cash balance?"""@"""Although Depreciation is a non-cash expense, it is tax-deductible. Therefore, an
increase in Depreciation will reduce the amount of taxes you pay, which boosts
your cash balance. The opposite happens if Depreciation decreases."""
BASIC@Accounting@"""Where does Depreciation usually appear on the Income Statement?"""@"""It could be in a separate line item, or it could be embedded in Cost of Goods Sold
or Operating Expenses – each company does it differently. Note that the end
result for accounting questions is the same: Depreciation always reduces Pre-Tax
Income."""
BASIC@Accounting@"""Why is the Income Statement not affected by Inventory purchases?"""@"""The expense of purchasing Inventory is only recorded on the Income Statement
when the goods associated with it have been manufactured and sold – so if it’s
just sitting in a warehouse, it does not count as Cost of Goods Sold (COGS) until
the company manufactures it into a product and sells it."""
BASIC@Accounting@"""Debt repayment shows up in Cash Flow from Financing on the Cash Flow
Statement. Why don’t interest payments also show up there? They’re a
financing activity!"""@"""The difference is that interest payments correspond to the current period and are
tax-deductible, so they have already appeared on the Income Statement. Since
they are a true cash expense and already appeared on the IS, showing them on
the CFS would be double-counting them and would be incorrect.
Debt repayments are a true cash expense but they do not appear on the IS, so we
need to adjust for them on the CFS.
If something is a true cash expense and it has already appeared on the IS, it will
never appear on the CFS unless we are re-classifying it – because you have
already factored in its cash impact."""
BASIC@Accounting@"""What’s the difference between Accounts Payable and Accrued Expenses?"""@"""Mechanically, they are the same: they’re Liabilities on the Balance Sheet used
when you’ve recorded an Income Statement expense for a product/service you
have received, but have not yet paid for in cash. They both affect the statements
in the same way as well (see the model).
The difference is that Accounts Payable is mostly for one-time expenses with
invoices, such as paying for a law firm, whereas Accrued Expenses is for
recurring expenses without invoices, such as employee wages, rent, and utilities."""
BASIC@Accounting@"""When would a company collect cash from a customer and not record it as
revenue?"""@"""Typically this happens when the customer pays upfront, in cash, for months or
years of a product/service, but the company hasn’t delivered it yet. Cases where
you see this:
1. Web-based subscription software.
2. Cell phone carriers that sell annual contracts.
3. Magazine publishers that sell subscriptions.
You only record revenue when you actually deliver the products / services – so
the company does not record cash collected as revenue right away."""
BASIC@Accounting@"""If cash collected is not recorded as revenue, what happens to it?"""@"""It goes into the Deferred Revenue balance on the Balance Sheet under Liabilities.
Over time, as the services or products are delivered, the Deferred Revenue
balance turns into real revenue on the Income Statement and the Deferred
Revenue balance decreases."""
BASIC@Accounting@"""Wait a minute… Deferred Revenue reflects cash that we’ve already
collected upfront for a product/service we haven’t delivered yet. Why is it a
Liability? That’s great for us!"""@"""Remember the definitions of Assets and Liabilities: an Asset results in more
future cash, and a Liability results in less future cash.
Think about how Deferred Revenue works: not only is the burden on us to
deliver the product/service in question, but we are also going to pay additional
taxes and possibly recognize additional future expenses when we record it as
real revenue.
It’s counter-intuitive, but that is why Deferred Revenue is a liability: it implies
additional future expenses."""
BASIC@Accounting@"""Wait, so what’s the difference between Accounts Receivable and Deferred
Revenue? They sound similar."""@"""There are 2 main differences:
1. Accounts Receivable has not yet been collected in cash from customers,
whereas Deferred Revenue has been.
2. Accounts Receivable is for a product/service the company has already
delivered but hasn’t been paid for yet, whereas Deferred Revenue is for a
product/service the company has not yet delivered.
Accounts Receivable is an Asset because it implies additional future cash
whereas Deferred Revenue is a Liability because it implies the opposite."""
BASIC@Accounting@"""How long does it usually take for a company to collect its Accounts
Receivable balance?"""@"""Generally the Accounts Receivable Days are in the 30-60 day range, though it
can be higher for companies selling higher-priced items and it might be lower for
companies selling lower-priced items with cash payments only."""
BASIC@Accounting@"""How are Prepaid Expenses (PE) and Accounts Payable (AP) different?"""@"""It’s similar to the difference between Accounts Receivable and Deferred Revenue
above:
1. Prepaid Expenses have already been paid out in cash, but haven’t yet
shown up on the Income Statement, whereas Accounts Payable haven’t
been paid out in cash but have shown up on the IS.
2. PE is for product/services that have not yet been delivered to the company,
whereas AP is for products/services that have already been delivered."""
BASIC@Accounting@"""You’re reviewing a company’s Balance Sheet and you see an “Income Taxes
Payable” line item on the Liabilities side. What is this?"""@"""Income Taxes Payable refers to normal income taxes that accrue and are then
paid out in cash, similar to Accrued Expenses… but for taxes instead.
Example: A company pays corporate income taxes in cash once every 3 months.
But they also have monthly Income Statements where they record income taxes,
even if they haven’t been paid out in cash yet.
Those taxes increase the Income Taxes Payable account until they are paid out in
cash, at which point Income Taxes Payable decreases."""
BASIC@Accounting@"""You see a “Noncontrolling Interest” (AKA Minority Interest) line item on
the Liabilities side of a company’s Balance Sheet. What does this mean?"""@"""If you own over 50% but less than 100% of another company, this refers to the
portion you do not own.
Example: Another company is worth $100. You own 70% of it. Therefore, there
will be a Noncontrolling Interest of $30 on your Balance Sheet to represent the
30% you do not own.
NOTE: There are more questions on this topic in the Advanced section. At a
basic level, you should just understand what it means."""
BASIC@Accounting@"""You see an “Investments in Equity Interests” (AKA Associate Companies)
line item on the Assets side of a firm’s Balance Sheet. What does this mean?"""@"""If you own over 20% but less than 50% of another company, this refers to the
portion that you DO own.
Example: Another company is worth $100. You own 25% of it. Therefore, there
will be an “Investments in Equity Interests” line item of $25 on your Balance
Sheet to represent the 25% that you own.
NOTE: There are more questions on this topic in the Advanced section. At a
basic level, you should just understand what it means."""
BASIC@Accounting@"""Could you ever have negative Shareholders’ Equity? What does it mean?"""@"""Yes. It is common in 2 scenarios:
1. Leveraged Buyouts with dividend recapitalizations – it means that the
owner of the company has taken out a large portion of its equity (usually
in the form of cash), which can sometimes turn the number negative.
2. It can also happen if the company has been losing money consistently and
therefore has a declining Retained Earnings balance, which is a portion of
Shareholders’ Equity.
It doesn’t “mean” anything in particular, but it might demonstrate that the
company is struggling (in the second scenario).
Note: Note that EQUITY VALUE – AKA Market Cap – is different from
Shareholders’ Equity and that Equity Value can never be negative."""
BASIC@Accounting@"""What is Working Capital? How is it used?"""@"""Working Capital = Current Assets – Current Liabilities.
If it’s positive, it means a company can pay off its short-term Liabilities with its
short-term Assets. It is often presented as a financial metric and its magnitude
and sign (negative or positive) tells you whether or not the company is “sound.”
You use Operating Working Capital more commonly in finance, and that is
defined as (Current Assets Excluding Cash & Investments) – (Current Liabilities
Excluding Debt).
The point of Operating Working Capital is to exclude items that relate to a
company’s financing and investment activities – Cash, Investments, and Debt –
from the calculation.  “Changes in Working Capital” (more commonly called “Changes in Operating
Assets and Liabilities”) also appears on the Cash Flow Statement in Cash Flow
from Operations and tells you how these operationally-related Balance Sheet items
change over time."""
BASIC@Accounting@"""“Short-Term Investments” is a Current Asset – should you count it in
Working Capital?"""@"""No. If you wanted to be technical you could say that it should be included in
“Working Capital,” as defined, but left out of “Operating Working Capital.”
But the truth is that no one lists Short-Term Investments in this section because
Purchases and Sales of Investments are considered investing activities, not
operational activities.
“Working Capital” is an imprecise idea and we prefer to say “Operating Assets
and Liabilities” because that’s a more accurate way to describe the concept of
operationally-related Balance Sheet items – which may sometimes be Long-Term
Assets or Long-Term Liabilities (e.g. Deferred Revenue)."""
BASIC@Accounting@"""What does negative (Operating) Working Capital mean? Is that a bad sign?"""@"""Not necessarily. It depends on the type of company and the specific situation –
here are a few different things it could mean:
1. Some companies with subscriptions or longer-term contracts often have
negative Working Capital because of high Deferred Revenue balances.
2. Retail and restaurant companies like Amazon, Wal-Mart, and McDonald’s
often have negative Working Capital because customers pay upfront, but
they wait weeks or months to pay their suppliers – this is a sign of
business efficiency and means that they always have healthy cash flow.
3. In other cases, negative Working Capital could point to financial trouble
or possible bankruptcy (for example, when the company owes a lot of
money to suppliers and cannot pay with cash on-hand)."""
BASIC@Accounting@"""What’s the difference between cash-based and accrual accounting?"""@"""Cash-based accounting recognizes revenue and expenses when cash is actually
received or paid out; accrual accounting recognizes revenue when collection is
reasonably certain (i.e. after an invoice has been sent to the customer and the
customer has a track record of paying on time) and recognizes expenses when
they are incurred rather than when they are paid out in cash.
All large companies use accrual accounting because it more accurately reflects
the timing of revenue and expenses; small businesses may use cash-based
accounting to simplify their financial statements (you no longer need a Cash
Flow Statement if everything is cash-based)."""
BASIC@Accounting@"""Let’s say a customer pays for a TV with a credit card. What would this look
like under cash-based vs. accrual accounting?"""@"""Under cash-based accounting, the revenue would not show up until the
company charges the customer’s credit card, receives authorization, and deposits
the funds in its bank account – at which point it would add to Revenue on the
Income Statement (and Pre-Tax Income, Net Income, etc.) and Cash on the
Balance Sheet.
Under accrual accounting, it would show up as Revenue right away but instead
of appearing in Cash on the Balance Sheet, it would go into Accounts Receivable
at first. Then, once the cash is actually deposited in the company’s bank account,
it would move into the Cash line item and Accounts Receivable would go down."""
BASIC@Accounting@"""Why do companies report GAAP or IFRS earnings, AND non-GAAP / non-
IFRS (or “Pro Forma”) earnings?"""@"""Many companies have non-cash charges such as Amortization of Intangibles,
Stock-Based Compensation, and Write-Downs on their Income Statements, all of
which negatively impact their Net Income.  Companies therefore report alternative “Pro Forma” metrics that exclude these
expenses and paint a more favorable picture of their earnings, under the
argument that these metrics better represent “true cash earnings.”"""
BASIC@Accounting@"""A company has had positive EBITDA for the past 10 years, but it recently
went bankrupt. How could this happen?"""@"""There are several possibilities:
1. The company is spending too much on Capital Expenditures – these are
not reflected in EBITDA but represent true cash expenses, so CapEx alone
could make the company cash flow-negative.
2. The company has high Interest Expense and is no longer able to afford its
Debt.
3. The company’s Debt all matures on one date and it is unable to refinance
it due to a “credit crunch” – and it runs out of cash when paying back the
Debt.
4. It has significant one-time charges (from litigation, for example) that have
been excluded from EBITDA and those are high enough to bankrupt the
company.
Remember, EBITDA excludes investment in (and Depreciation of) Long-Term
Assets, Interest, and Non-Recurring Charges – and any one of those could
represent massive cash expenses."""
BASIC@Accounting@"""Normally Goodwill remains constant on the Balance Sheet – why would it
be impaired and what does Goodwill Impairment mean?"""@"""Usually this happens when a company buys another one and the acquirer re-
assesses what it really got out of the deal – customer relationships, brand name,
and intellectual property – and finds that those “Assets” are worth significantly
less than they originally thought.
It often happens in acquisitions where the buyer “overpaid” for the seller and it
can result in extremely negative Net Income on the Income Statement.  It can also happen when a company discontinues part of its operations and must
impair the associated Goodwill"""
BASIC@Accounting@"""Walk me through how Depreciation going up by $10 would affect the
statements."""@"""Income Statement: Operating Income and Pre-Tax Income would decline by $10
and, assuming a 40% tax rate, Net Income would go down by $6.
Cash Flow Statement: The Net Income at the top goes down by $6, but the $10
Depreciation is a non-cash expense that gets added back, so overall Cash Flow from Operations goes up by $4. There are no changes elsewhere, so the overall
Net Change in Cash goes up by $4.
Balance Sheet: Plants, Property & Equipment goes down by $10 on the Assets
side because of the Depreciation, and Cash is up by $4 from the changes on the
Cash Flow Statement.
Overall, Assets is down by $6. Since
Net Income fell by $6 as well,
Shareholders’ Equity on the
Liabilities & Equity side is down by
$6 and both sides of the Balance
Sheet balance.
Intuition: We save on taxes with any non-cash charge, including Depreciation."""
BASIC@Accounting@"""What happens when Accrued Expenses increases by $10?"""@"""For this question, remember that Accrued Expenses are recognized on the
Income Statement but haven’t been paid out in cash yet. So this could correspond
to payment being set aside for an employee, but not actually the employee in
cash yet.
Income Statement: Operating Income and Pre-Tax Income fall by $10, and Net
Income falls by $6 (assuming a 40% tax rate).
Cash Flow Statement: Net Income is down by $6, and the increase in Accrued
Expenses will increase Cash Flow by $10, so overall Cash Flow from Operations is
up by $4 and the Net Change in Cash at the bottom is up by $4.
Balance Sheet: Cash is up by $4 as a
result, so Assets is up by $4. On the
Liabilities & Equity side, Accrued
Expenses is a Liability so Liabilities is up
by $10 and Shareholders’ Equity.   (Retained Earnings) is down by $6 due to the Net Income decrease, so both sides
balance.
Intuition: We record an additional expense and save on taxes with it… but that
expense hasn’t been paid in cash yet, so our cash balance is actually up."""
BASIC@Accounting@"""What happens when Accrued Expenses decreases by $10 (i.e. it’s now paid
out in the form of cash)? Do not take into account cumulative changes from
previous increases in Accrued Expenses."""@"""Assuming that you are not taking into account any previous increases (confirm
this):
Income Statement: There are no changes.
Cash Flow Statement: The change in Accrued Expenses in the CFO section is
negative $10 because you pay it out in cash, and so the cash at the bottom
decreases by $10.
Balance Sheet: Cash is down by $10 on the
Assets side and Accrued Expenses is down
by $10 on the other side, so it balances.
Intuition: This is a simple cash payout of
previously recorded expenses."""
BASIC@Accounting@"""Accounts Receivable increases by $10. Walk me through the 3 statements."""@"""If AR “increases” by $10, it means that we’ve recorded revenue of $10 but
haven’t received it in cash yet. For example, a customer has ordered a $10 product
from us and we’ve delivered it, but we are still waiting on cash payment.
Income Statement: Revenue is up by $10 and so is Pre-Tax Income, which means
that Net Income is up by $6 assuming a 40% tax rate. Cash Flow Statement: Net Income is up by $6 but the AR increase is a reduction
in cash (since we don’t have the cash yet), so we need to subtract $10, which
results in cash at the bottom being down by $4.
Balance Sheet: On the Assets side, Cash is
down by $4 and AR is up by $10, so the
Assets side is up by $6. On the other side,
Shareholders’ Equity is up by $6 because
Net Income has increased by $6. Both
sides balance.
Intuition: When AR increases, it means that we’ve paid taxes on additional
revenue but haven’t received any of that revenue in cash yet… so our cash
balance decreases by the additional amount of taxes we’ve paid."""
BASIC@Accounting@"""Prepaid Expenses decreases by $10. Walk me through the statements. Do not
take into account cumulative changes from previous increases in Prepaid
Expenses."""@"""When Prepaid Expenses “decreases,” it means that expenses are now recognized
on the Income Statement. For example, we’ve previously paid for an insurance
policy in cash and have now recognized that same expense on the IS.
Income Statement: Pre-Tax Income is down by $10, and Net Income is down by
$6.
Cash Flow Statement: Net Income is down by $6 but since Prepaid Expenses is
an Asset, a decrease of $10 results in an increase of 10 in cash. At the bottom of
the CFS, cash is up by $4 as a result.
Balance Sheet: On the Assets side Cash is
up by $4 and Prepaid Expenses is down
by $10, so the Assets side is down by $6
overall. On the other side, Shareholders’
Equity is down by $6 because of the reduced Net Income, so both sides balance.
Intuition: Here, we’re losing Net Income and paying additional taxes… but oh,
wait, we’ve already paid out these expenses in cash previously! So our Cash
balance goes up rather than down, despite the additional Income Statement
expenses."""
BASIC@Accounting@"""What happens when Inventory goes up by $10, assuming you pay for it with
cash?"""@"""This really just means, “Walk me through what happens on the statements when
you purchase $10 worth of Inventory with cash.”
Income Statement: No changes.
Cash Flow Statement: Inventory is an Asset so that reduces Cash Flow from
Operations – it goes down by $10, as does the Net Change in Cash at the bottom.
Balance Sheet: On the Assets side,
Inventory is up by $10 but Cash is down
by $10, so the changes cancel out and
Assets still equals Liabilities & Equity.
Intuition: We’ve spent cash to buy
Inventory, but haven’t manufactured or sold anything yet."""
BASIC@Accounting@"""A company sells some of its PP&E for $120. On the Balance Sheet, the PP&E
is worth $100. Walk me through how the 3 statements change."""@"""Income Statement: You record a Gain of $20 ($120 – $100), which boosts Pre-Tax
Income by $20. At a 40% tax rate, Net Income is up by $12.
Cash Flow Statement: Net Income is up by $12, but you need to subtract out that
Gain of $20, so Cash Flow from Operations is down by $8.  Then, in Cash Flow from Investing, you record the entire amount of proceeds
from the sale – $120 – so that section is up by $120. At the bottom of the CFS,
cash is therefore up by $112.
Balance Sheet: Cash is up by $112, but
PP&E is down by $100 since we’ve sold
it, so the Assets side is up by $12. The
other side is up by $12 as well, since
Shareholders’ Equity is up by $12 due
to the Net Income increase.
Intuition: Gains and Losses are not non-cash, but they are re-classified on the CFS.
The cash increase here simply reflects the after-tax profit from the Gain – if we
had sold the PP&E at its Balance Sheet value, there would be no change on the IS."""
BASIC@Accounting@"""Walk me through what happens on the 3 statements when there’s an Asset
Write-Down of $100."""@"""Income Statement: The $100 Write-Down reduces Pre-Tax Income by $100. With
a 40% tax rate, Net Income declines by $60.
Cash Flow Statement: Net Income is down by $60 but the Write-Down is a non-
cash expense, so we add it back – and therefore Cash Flow from Operations
increases by $40. Cash at the bottom is up by $40.
Balance Sheet: Cash is now up by $40
and an Asset is down by $100 (it’s not
clear which Asset since the question never
stated it). Overall, the Assets side is
down by $60.
On the other side, since Net Income was down by $60, Shareholders’ Equity is
also down by $60 – and both sides balance.  Intuition: The same as any other non-cash charge: we save on taxes, so our Cash
goes up, and something on the Balance Sheet changes in response.
Advanced Note: No, Write-Downs are not always tax-deductible like this – see
the Advanced section for more."""
BASIC@Accounting@""" Explain what happens on the 3 statements when a company issues $100
worth of shares to investors."""@"""Income Statement: No changes (since this doesn’t affect taxes and since the
shares will be around for years to come).
Cash Flow Statement: Cash Flow from Financing is up by $100 due to this share
issuance, so cash at the bottom is up by $100.
Balance Sheet: Cash is up by $100 on
the Assets side and Shareholders’
Equity (Common Stock & APIC) is up
by $100 on the other side to balance it.
Intuition: This one does not affect taxes
and does not correspond to the current period, so it doesn’t show up on the IS –
just like similar items, all that changes is Cash and then something else on the
Balance Sheet.
10. Let’s say we have the same scenario, but now instead of issuing $100 worth
of stock to investors, the company issues $100 worth of stock to employees in
the form of Stock-Based Compensation. What happens?
Income Statement: You need to record this as an additional expense because it’s
now a tax-deductible and a current expense – Pre-Tax Income falls by $100 and
Net Income falls by $60 assuming a 40% tax rate.
Cash Flow Statement: Net Income is down by $60 but you add back the SBC of
$100 since it’s a non-cash charge, so cash at the bottom is up by $40.  Balance Sheet: Cash is up by $40 on the
Assets side. On the other side, Common
Stock & APIC is up by $100 due to the
Stock-Based Compensation, but Retained
Earnings is down by $60 due to the
reduced Net Income, so Shareholders’
Equity is up by $40 and both sides balance.
Intuition: This is a non-cash charge, so like all non-cash charges it impacts the IS
and affects one Balance Sheet item in addition to Cash and Retained Earnings –
in this case, it flows into Common Stock & APIC because that one reflects the
market value of stock at the time the stock was issued. The cash increase here
simply reflects the tax savings."""
BASIC@Accounting@"""A company decides to issue $100 in Dividends – how do the 3 statements
change?"""@"""Income Statement: No changes. Dividends count as a financing activity and are
not tax-deductible, so they never appear on the IS.
Cash Flow Statement: Cash Flow from Financing is down by $100 due to the
Dividends, so cash at the bottom is down by $100.
Balance Sheet: Cash is down by $100 on
the Assets side, and Shareholders’ Equity
(Retained Earnings) is down by $100 on
the other side so both sides balance.
Intuition: This is another non-operational
CFS / BS item, so it is a simple use of cash and nothing else changes."""
BASIC@Accounting@"""A company has recorded $100 in income tax expense on its Income
Statement. All $100 of it is paid, in cash, in the current period. Now we change it and only $90 of it is paid in cash, with $10 being deferred to future periods.
How do the statements change?"""@"""Income Statement: Nothing changes. Both Current and Deferred Taxes are
recorded simply as “Taxes” and Net Income remains the same. Net Income
changes only if the total amount of taxes changes.
Cash Flow Statement: Net Income remains the same but we add back the $10
worth of Deferred Taxes in Cash Flow from Operations – no other changes, so
cash at the bottom is up by $10.
Balance Sheet: Cash is up by $10 and so
the entire Assets side is up by $10. On
the other side, the Deferred Tax
Liability is up by $10 and so both sides
balance.
Intuition: Deferred Taxes save us on cash in the current period, at the expense of
additional cash taxes in the future."""
BASIC@Accounting@"""Walk me through a $100 “bailout” of a company and how it affects the 3
statements."""@"""First, confirm what type of “bailout” this is – Debt? Equity? A combination? The
most common scenario here is an equity (or Preferred Stock) investment from the
government, so here’s what happens:
Income Statement: No changes.
Cash Flow Statement: Cash Flow from Financing goes up by $100 to reflect this
new investment, so the Net Change in Cash is up by $100.
Balance Sheet: Cash is up by $100 so the Assets side is up by $100; on the other
side, Shareholders’ Equity goes up by $100 to make it balance (Common Stock &
APIC for a normal equity investment or Preferred Stock for preferred). Intuition: It’s the same as a normal stock
issuance: no Income Statement changes
because nothing affects the company’s
taxes."""
BASIC@Accounting@"""Walk me through a $100 Write-Down of Debt – as in OWED Debt, a
Liability – on a company’s Balance Sheet and how it affects the 3 statements."""@"""This one is counter-intuitive. When a Liability is written down you record it as
an addition on the Income Statement (with an asset write-down, it’s a
subtraction).
Income Statement: Pre-Tax Income goes up by $100, and assuming a 40% tax
rate, Net Income is up by $60.
Cash Flow Statement: Net Income is up by $60, but we need to subtract that
Debt Write-Down because it was non-cash – so Cash Flow from Operations is
down by $40, and Cash is down by $40 at the bottom.
Balance Sheet: Cash is down by $40 so the Assets side is down by $40. On the
other side, Debt is down by $100 but Shareholders’ Equity is up by $60 because
the Net Income was up by $60 – so Liabilities & Shareholders’ Equity is down by
$40 and both sides balance.
If this seems strange to you, you’re not alone – click to read this Forbes article for
more on why writing down debt actually benefits companies accounting-wise.
Intuition: One way to think about this is that writing down Assets is “bad” for
us because it reduces our ability to generate future cash flow, but writing down
Liabilities is “good” because it reduces our future expenses… sort of. I don’t
recommend presenting it like that in an interview."""
BASIC@Accounting@"""Wait a minute – if writing down Liabilities boosts Net Income, why don’t
companies just do it all the time? It helps them out!"""@"""This is like asking, “If declaring bankruptcy helps you relieve your obligations,
why not do it whenever you rack up debt?!”
And the answer is similar: Because it may help in the short-term, but in the long-
term it hurts the company’s credibility and ability to borrow in the future. If a
company continually writes down its Liabilities, investors will stop trusting it –
and the inability to borrow again will hurt it far more than a reduced Net Income
would."""
BASIC@Accounting@"""What’s the difference between LIFO and FIFO? Can you walk me through
an example of how they differ?"""@"""First, note that this question does not apply to you if you’re outside the US
because IFRS does not permit the use of LIFO. But you may want to read this
anyway because it’s good to know in case you ever work with US-based
companies.
LIFO stands for “Last-In, First-Out” and FIFO stands for “First-In, First-Out” –
they are 2 different ways of recording the value of Inventory and the Cost of
Goods Sold (COGS).
With LIFO, you use the value of the most recent Inventory additions for COGS,
but with FIFO you use the value of the oldest Inventory additions for COGS.
Here’s an example: let’s say your starting Inventory balance is $100 (10 units
valued at $10 each). You add 10 units each quarter for $12 each in Q1, $15 each in
Q2, $17 each in Q3, and $20 each in Q4, so that the total is $120 in Q1, $150 in Q2,
$170 in Q3, and $200 in Q4.
You sell 40 of these units throughout the year for $30 each. In both LIFO and
FIFO, you record 40 * $30 or $1,200 for the annual revenue.
The difference is that in LIFO, you would use the 40 most recent Inventory
purchase values – $120 + $150 + $170 + $200 – for the Cost of Goods Sold, whereas in FIFO you would use the 40 oldest Inventory values – $100 + $120 +
$150 + $170 – for COGS.
As a result, the LIFO COGS would be $640 and FIFO COGS would be $540, so
LIFO would also have lower Pre-Tax Income and Net Income. The ending
Inventory value would be $100 higher under FIFO and $100 lower under LIFO.
If Inventory is getting more expensive to purchase, LIFO will produce higher
values for COGS and lower ending Inventory values and vice versa if Inventory
is getting cheaper to purchase."""
BASIC@Accounting@"""Let’s say Apple is buying $100 worth of new iPad factories with debt. How
are all 3 statements affected at the start of “Year 1,” before anything else
happens?"""@"""Income Statement: At the start of “Year 1,” there are no changes yet.
Cash Flow Statement: The $100 worth of Capital Expenditures would show up
under Cash Flow from Investing as a net reduction in Cash Flow (so Cash Flow is
down by $100 so far). And the additional $100 worth of Debt raised would show
up as an addition to Cash Flow in Cash Flow from Investing, canceling out the
investment activity. So the cash number stays the same, for now.
Balance Sheet: There is now an
additional $100 worth of factories, so
PP&E is up by $100 and Assets is
therefore up by $100. On the other side,
Debt is up by $100, so the entire other
side is up by $100 and both sides
balance."""
BASIC@Accounting@"""Now let’s go out one year, to the start of Year 2. Assume the Debt is high-
yield, so no principal is paid off, and assume an interest rate of 10%. Also
assume the factories Depreciate at a rate of 10% per year. What happens now?
Assume that we have already factored in the changes from Part 1 and are only
tracking what happens AFTER those have taken place."""@"""After a year has passed, Apple must pay Interest Expense and must record the
Depreciation.
Income Statement: Operating Income decreases by $10 due to the 10%
Depreciation charge each year, and the $10 in additional Interest Expense
decreases the Pre-Tax Income by $20 altogether ($10 from the Depreciation and
$10 from Interest Expense).
Assuming a tax rate of 40%, Net Income falls by $12. Cash Flow Statement: Net Income at the top is down by $12. Depreciation is a
non-cash expense, so you add it back and the end result is that Cash Flow from
Operations is down by $2.
That’s the only change on the Cash Flow Statement, so overall Cash is down by
$2.
Balance Sheet: On the Assets side, Cash
is down by $2 and PP&E is down by $10
due to the Depreciation, so overall the
Assets side is down by $12.
On the other side, since Net Income was
down by $12, Shareholders’ Equity is also down by $12 and both sides balance.
Remember that the Debt number itself does not change since we’ve assumed that
nothing is paid back."""
BASIC@Accounting@"""At the end of Year 2, the factories all break down and their value is written
down to $0. The loan must also be paid back now. Walk me through how the 3
statements ONLY from the start of Year 2 to the end of Year 2."""@"""After 2 years, the value of the factories is now $80 if we go with the 10%
Depreciation per year assumption. It is this $80 that we will write down on the 3
statements. Also, don’t forget about the Interest Expense – it still needs to be
paid in Year 2.
Income Statement: We have $10 worth of Depreciation and then the $80 Write-
Down. We also have $10 of additional Interest Expense, so Pre-Tax Income is
down by $100. Net Income is down by $60 at a 40% tax rate.
Cash Flow Statement: Net Income is down by $60 but the Write-Down and
Depreciation are both non-cash expenses, so we add them back and cash flow is
up by $30 so far. There are no changes under Cash Flow from Investing, but under Cash Flow
from Financing there is a $100 charge for the loan payback – so Cash Flow from
Financing falls by $100.
Overall, cash at the bottom decreases by $70.
Balance Sheet: Cash is now down
by $70, and PP&E has decreased by
$90, so the Assets side is down by
$160.
On the other side, Debt is down
$100 since it was paid off, and since
Net Income was down by $60, Shareholders’ Equity is down by $60. Both sides
are down by $160 and balance.
NOTE: Be very careful with this type of question because there are many
variations – when in doubt, always ask to clarify before you begin answering."""
BASIC@Accounting@"""Now let’s look at a different scenario and assume Apple is ordering $10 of
additional iPad Inventory, using cash on hand. They order the Inventory, but
they have not manufactured or sold anything yet – what happens to the 3
statements?"""@"""Income Statement: No changes.
Cash Flow Statement: Inventory is up by $10, so Cash Flow from Operations
decreases by $10. There are no further changes, so overall Cash is down by $10.
Balance Sheet: Inventory is up by $10 and Cash is down by $10 so the Assets
number stays the same and the Balance Sheet remains in balance."""
BASIC@Accounting@"""Now let’s say they sell the iPads for revenue of $20, at a cost of $10. Walk me
through the 3 statements under this scenario."""@"""Income Statement: Revenue is up by $20 and COGS is up by $10, so Gross Profit,
Operating Income, and Pre-Tax Income are all up by $10. Assuming a 40% tax
rate, Net Income is up by $6.
Cash Flow Statement: Net Income at the top is up by $6 and Inventory has
decreased by $10 (since we just manufactured the Inventory into real iPads),
which is a net addition to cash flow – so Cash Flow from Operations is up by $16
overall.
These are the only changes on the CFS, so cash at the bottom is up by $16.
Balance Sheet: Cash is up by $16 and
Inventory is down by $10, so the
Assets side is up by $6 overall.
On the other side, Net Income was up
by $6, so Shareholders’ Equity is up by
$6 and both sides balance.
Intuition: This simply reflects the sale of products at a certain cost, and the after-
tax profit from that. The only tricky part is how Cash increases by $16, not $6 –
that just reflects the “release” you get from selling off the Inventory."""
BASIC@Accounting@"""A company raises $100 worth of Debt, at 5% interest and 10% yearly
principal repayment, to purchase $100 worth of Short-Term Securities with
10% interest attached. Walk me through how the 3 statements change
IMMEDIATELY AFTER this initial purchase."""@"""Income Statement: No changes yet.
Cash Flow Statement: The $100 Purchase of Short-Term Securities shows up as a
reduction of cash flow under Cash Flow from Investing, and the $100 Debt raise
shows up as a $100 increase under Cash Flow from Financing. Cash at the
bottom is unchanged.  Balance Sheet: Short-Term Securities on
the Assets side is up by $100, and Debt on
the Liabilities side is up by $100 so both
sides balance."""
BASIC@Accounting@"""Now walk me through what happens at the end of Year 1, after the company
has earned interest, paid interest, and paid back some of the debt principal."""@"""Income Statement: Interest Income is $10 ($100 * 10%) and Interest Expense is $5
($100 * 5%), so Pre-Tax Income increases by $5, and Net Income increases by $3
assuming a 40% tax rate.
Cash Flow Statement: Net Income is up by $3. In Cash Flow from Financing, we
repay $10 worth of debt ($100 * 10%), so cash at the bottom is down by $7.
Balance Sheet: Cash on the Assets side
is down by $7, so the Assets side is
down by $7. On the other side, Debt is
down by $10 due to the repayment and
Shareholders’ Equity (Retained
Earnings) is up by $3 due to the Net
Income, so this side is also down by $7 and the Balance Sheet balances."""
BASIC@Accounting@"""Now let’s say that at the end of year 1, the company sells the $100 of Short-
Term Securities but gets a price of $110 for them instead. It also uses the
proceeds to repay the $90 worth of remaining Debt.
Walk me through the statements after ONLY these changes."""@"""Income Statement: You record a Gain of $10 ($110 – $100), so Pre-Tax Income is
up by $10 and Net Income is up by $6 with a 40% tax rate.
Cash Flow Statement: Net Income is up by $6 but you subtract the Gain of $10,
so Cash Flow from Operations is down by $4.  Under Cash Flow from Investing, you record the $110 sale as an addition to cash
flow, so cash is up by $106 so far.
Then, under Cash Flow from Financing, you pay off $90 worth of Debt, which
reduces cash by $90. Overall, Cash at the bottom is up by $16.
Balance Sheet: Cash on the Assets side
is up by $16 but Short-Term Securities
is down by $100, so the Assets side is
down by $84.
On the other side, Debt is down by $90
but Shareholders’ Equity (Retained Earnings) is up by $6 due to the Net Income
increase, so that side is also down by $84 and both sides balance."""
ADVANCED@Accounting@"""1. Explain what a Deferred Tax Asset or Deferred Tax Liability is. How do they
usually get created?"""@"""A Deferred Tax Liability (DTL) means that you need to pay additional cash
taxes in the future – in other words, you’ve underpaid on taxes and need to make
up for it in the future.
A Deferred Tax Asset (DTA) means that you can pay less in cash taxes in the
future – you’ve paid too much before, and now you get to save on taxes in the
future. Both DTLs and DTAs arise because of temporary differences between what a
company can deduct for cash tax purposes and what they can deduct for book
tax purposes.
You see them most often in 3 scenarios:
1. When companies record Depreciation differently for book and tax
purposes (i.e. more quickly for tax purposes to save on taxes).
2. When Assets get written up for book, but not tax purposes, in M&A deals.
3. When pension contributions get recognized differently for book vs. tax
purposes."""
ADVANCED@Accounting@"""Wait a minute, then how can both DTAs and DTLs exist at the same time on
a company’s Balance Sheet? How can they both owe and save on taxes in the
future?"""@"""This one’s subtle, but you frequently see both of these items on the statements
because a company can owe and save on future taxes – for different reasons.
For example, they might have Net Operating Losses (NOLs) because they were
unprofitable in early years, and those NOLs could be counted as Deferred Tax
Assets.
But they might also record accelerated Depreciation for tax purposes, but
straight-line it for book purposes, which would result in a DTL in early years."""
ADVANCED@Accounting@"""How do Income Taxes Payable and Income Taxes Receivable differ from
DTLs and DTAs? Aren’t they the same concept?"""@"""They are similar, but not the same exact idea. Income Taxes Payable and
Receivable are accrual accounts for taxes that are owed for the current year.
For example, if a company owes $300 in taxes at the end of each quarter during
the year, on its monthly financial statements it would increment Income Taxes. Payable by $100 each month until it pays out everything in the cash at the end of
3 months, at which point Income Taxes Payable would decrease once again.
By contrast, DTAs and DTLs tend to be longer-term and arise because of events
that do NOT occur in the normal course of business."""
ADVANCED@Accounting@"""Walk me through how you project revenue for a company."""@"""The simplest way to do it is to assume a percentage growth rate – for example,
15% in year 1, 12% in year 2, 10% in year 3, and so on, usually decreasing
significantly over time.
To be more precise, you could create a bottoms-up build or a tops-down build:
• Bottoms-Up: Start with individual products / customers, estimate the
average sale value or customer value, and then the growth rate in
customers / transactions and customer / transaction values to tie
everything together.
• Tops-Down: Start with “big-picture” metrics like overall market size, and
then estimate the company’s market share and how that will change in
coming years and multiply to get to their revenue.
Of these two methods, bottoms-up is more common and is taken more seriously
because estimating “big-picture” numbers is almost impossible."""
ADVANCED@Accounting@"""Walk me through how you project expenses for a company."""@"""The simplest method is to make each Income Statement expense a percentage of
revenue and hold it fairly constant, maybe decreasing the percentages slightly
(due to economies of scale), over time.
For a more complex method, you could start with each department of a company,
the number of employees in each, the average salary, bonuses, and benefits, and
then make assumptions for those going forward. Usually you assume that the number of employees is tied to revenue, and then
you assume growth rates for salary, bonuses, benefits, and other metrics.
Cost of Goods Sold should be tied directly to Revenue and each “unit” sold
should incur an expense.
Other items such as rent, Capital Expenditures, and miscellaneous expenses are
linked to the company’s internal plans for building expansion plans (if they have
them), or to Revenue in a simpler model."""
ADVANCED@Accounting@"""How do you project Balance Sheet items like Accounts Receivable and
Accrued Expenses over several years in a 3-statement model?"""@"""Normally you assume that these are percentages of revenue or expenses, under
the assumption that they’re all linked to the Income Statement:
• Accounts Receivable: % of Revenue.
• Prepaid Expense: % of Operating Expenses.
• Inventory: % of COGS.
• Deferred Revenue: % of Revenue.
• Accounts Payable: % of Operating Expenses.
• Accrued Expenses: % of Operating Expenses.
Then you either carry the same percentages across in future years or assume
slight increases or decreases depending on the company.
You can also project these metrics using “days,” e.g. Accounts Receivable Days =
Accounts Receivable / Revenue * 365, assume that the days required to collect AR
stays relatively the same each year, and calculate the AR number from that."""
ADVANCED@Accounting@"""How should you project Depreciation and Capital Expenditures?"""@"""You could use several different approaches here:
• Simplest: Make each one a % of revenue.
Alternative: Make Depreciation a % of revenue, but for CapEx average
several years of previous CapEx, or make it an absolute dollar change (e.g.
it increases by $100 each year) or percentage change (it increases by 2%
each year).
• Complex: Create a PP&E schedule, where you estimate a CapEx increase
each year based on management’s plans, and then Depreciate existing
PP&E using each asset’s useful life and the straight-line method; also
Depreciate new CapEx right after it’s added, using the same approach."""
ADVANCED@Accounting@"""Let’s take a step back… there’s usually a “simple” and “complex” way of
projecting a company’s financial statements. Is there a real advantage to using
the complex method? In other words, does it give us better numbers?"""@"""In short, no. The complex methods give you similar numbers most of the time –
you’re not using them to get better numbers, but rather to get better support for
those numbers.
If you just say, “Revenue grows by 10% per year!” there isn’t much evidence to
back up that claim.
But if you create a bottoms-up revenue model by segment, then you can say,
“The 10% growth is driven by a 5% price increase in this segment, a 10% increase
in units sold here, 15% growth in units sold in this geography” and so on."""
ADVANCED@Accounting@"""What are examples of non-recurring charges we need to add back to a
company’s EBIT / EBITDA when analyzing its financial statements?"""@"""• Restructuring Charges
• Goodwill Impairment
• Asset Write-Downs
• Bad Debt Expenses
• One-Time Legal Expenses
• Disaster Expenses
• Changes in Accounting Policies
Note that to qualify as an “add-back” or “non-recurring” charge for EBITDA /
EBIT purposes, it needs to affect Operating Income on the Income Statement.
So if one of these charges is “below the line,” then you do not add it back for the
EBITDA / EBIT calculation.
Also note that you do add back Depreciation, Amortization, and sometimes
Stock-Based Compensation when calculating EBITDA, but that these are not
“non-recurring charges” because all companies have them every year – they’re
just non-cash charges."""
ADVANCED@Accounting@"""What’s the difference between capital leases and operating leases? How do
they affect the statements?"""@"""Operating Leases are used for short-term leasing of equipment and property, and
do not involve ownership of anything. Operating lease expenses show up as
Operating Expenses on the Income Statement and impact Operating Income, Pre-
Tax Income, and Net Income.
Capital Leases are used for longer-term items and give the lessee ownership
rights; they Depreciate, incur Interest Expense, and are counted as Debt.
A lease is a capital lease if any one of the following 4 conditions is true:
1. If there’s a transfer of ownership at the end of the term.
2. If there’s an option to purchase the asset at a “bargain price” at the end of
the term.
3. If the term of the lease is greater than 75% of the useful life of the asset.
4. If the present value of the lease payments is greater than 90% of the asset’s
fair market value."""
ADVANCED@Accounting@"""How do Net Operating Losses (NOLs) affect a company’s 3 statements?"""@"""The “quick and dirty” way: reduce the Taxable Income by the portion of the
NOLs that you can use each year, apply the same tax rate, and then subtract that
new Tax number from your old Pre-Tax Income number (which should stay the
same). Then you can deduct whatever you used up from the NOL balance
(which should be a part of the Deferred Tax Asset line item).
A more complex way to do this: create a book vs. cash tax schedule where you
calculate the Taxable Income based on NOLs, and then look at what you would
pay in taxes without the NOLs. Then you record the difference as an increase to
the Deferred Tax Liability on the Balance Sheet.
This method reflects the fact that you’re saving on cash flow – since the DTL, a
Liability, is rising – but correctly separates the NOL impact into book vs. cash
taxes."""
ADVANCED@Accounting@"""What’s the difference between Tax Benefits from Stock-Based
Compensation and Excess Tax Benefits from Stock-Based Compensation? How
do they impact the statements?"""@"""Tax Benefits simply record what the company has saved in taxes as a result of
issuing Stock-Based Compensation (e.g. they issue $100 in SBC and have a 40%
tax rate so they save $40 in taxes).
Excess Tax Benefits are a portion of these normal Tax Benefits and represent the
amount of taxes they’ve saved due to share price increases (i.e. the Stock-Based
Compensation is worth more due to a share price increase since they announced
plans to issue it).
Neither one is a separate item on the Income Statement.
On the Cash Flow Statement, Excess Tax Benefits are subtracted out of Cash
Flow from Operations and added to Cash Flow from Financing, effectively “re-
classifying” them. Basically you’re saying, “We’ve gotten some extra cash flow
from our share price increasing, so let’s call it what it is: a financing activity.”
Also on the CFS, you add back the Tax Benefits in Cash Flow from Operations.
You do that because you want them to accrue to Additional Paid-In Capital
(APIC) on the Balance Sheet. You’re saying, “In addition to the additional value
we created with this stock/option issuance, we’ve also gotten some value from
the tax savings… so let’s make reflect that value along with the SBC itself under
APIC.”"""
ADVANCED@Accounting@"""Let’s say you’re creating quarterly projections for a company rather than
annual projections. What’s the best way to project revenue growth each
quarter?"""@"""It’s best to split out the historical data by quarters and then to analyze the Year-
over-Year (YoY) Growth for each quarter. For example, in Quarter 1 of Year 2
you would look at how much the company has grown revenue by in Quarter 1 of
previous years.
It wouldn’t make much sense to use Quarter-over-Quarter growth (i.e. Quarter 1
over Quarter 4 in the previous year) because many companies are seasonal.
The same applies for expenses as well: always make sure you take into account
seasonality with quarterly projections."""
ADVANCED@Accounting@"""What’s the purpose of calendarizing financial figures?"""@"""“Calendarizing” means “Rather than using a company’s normal fiscal year
figures, let’s use another year-long period during the year and calculate their
revenue, expenses, and other key metrics for that period.”
For example, a company’s fiscal year might end on December 31 – if you
calendarized it, you might look at the period from June 30 in the previous year to
June 30 of this year rather than the traditional January 1 – December 31 period.
You do this most frequently with public comps (see the section on Valuation),
because companies often have “misaligned” fiscal years. If one company’s year
ends December 31, another’s ends June 30, and another’s ends September 30, you
need to adjust and use the same period for all of them – otherwise you’re
comparing apples to oranges because the financial figures are all from different
time periods."""
ADVANCED@Accounting@"""What happens to the Deferred Tax Asset / Deferred Tax Liability line item
if we record accelerated Depreciation for tax purposes, but straight-line
Depreciation for book purposes?"""@"""If Depreciation is higher on the tax schedule in the first few years, the Deferred
Tax Liability will increase because you’re paying less in cash taxes initially and
need to make up for it later.
Then, as tax Depreciation switches and becomes lower in the later years, the DTL
will decrease as you pay more in cash taxes and “make up for” the early tax
savings."""
ADVANCED@Accounting@"""If you own over 50% but less than 100% of another company, what happens
on the financial statements when you record the acquisition?"""@"""This scenario refers to a Noncontrolling Interest (AKA Minority Interest): you
consolidate all the financial statements and add 100% of the other company’s
statements to your own.
It’s similar to a 100% acquisition where you do the same thing, but you also
create a new item on the Liabilities & Equity side called a Noncontrolling
Interest to reflect the portion of the other company that you don’t own (e.g. if it’s
worth $100 and you own 70%, you would list $30 here).
Just like with normal acquisitions, you also wipe out the other company’s
Shareholders’ Equity when you combine its statements with yours, and you still
allocate the purchase price (see the Merger Model section for more on that).
You also subtract Net Income Attributable to Noncontrolling Interests on the
Income Statement – in other words, the other company’s Net Income *
Percentage You Do Not Own. But then you add it back on the Cash Flow
Statement in the CFO section. That is just an accounting rule and has no cash
impact.
On the Balance Sheet, the Noncontrolling Interest line item increases by that
number (Net Income Attributable to Noncontrolling Interests) each year.
Retained Earnings decreases by that same number each year because it reduces
Net Income, so the Balance Sheet remains in balance."""
ADVANCED@Accounting@"""What about if you own between 20% and 50% of another company? How
do you record this acquisition and how are the statements affected?"""@"""This case refers to an Equity Interest (AKA Associate Company) – here, you do
not consolidate the statements at all.
Instead, you reflect Percentage of Other Company That You Own * Value of
Other Company and show it as an Asset on the Balance Sheet (Investments in
Equity Interests). For example, if the other company is worth $200 and you own
30% of it, you record $60 for the Investments in Equity Interests line item.
You also add Other Company’s Net Income * Percentage Ownership to your own
Net Income on the Income Statement, and then subtract it on the Cash Flow
Statement because it’s a non-cash addition.
Each year, the Investments in Equity Interests line item increases by that number,
and it decreases by any dividends issued from that other company to you. On the
other side, Retained Earnings will also change based on the change in Net
Income, so everything balances."""
ADVANCED@Accounting@"""What if you own less than 20% of another company?"""@"""This is where it gets inconsistent. Some companies may still apply the Equity
Interest treatment in this case, especially if they exert “significant influence” over
the other company.
But sometimes they may also classify it as a simple Investment or Security on
their Balance Sheet (see the next few questions), acting as if they have simply
bought a stock or bond and ignoring the other company’s financials."""
ADVANCED@Accounting@"""What are the different classifications for Securities that a company can use
on its Balance Sheet? How do they differ?"""@"""• Trading: These Securities are very short-term and you count all Gains and
Losses on the Income Statement, even if they’re unrealized (i.e. you
haven’t sold the Securities yet).
• Available for Sale (AFS): These Securities are longer-term and you don’t
report Gains or Losses on the Income Statement – they appear under
Accumulated Other Comprehensive Income (AOCI). The Balance Sheet
values of these Securities also change over time because you mark them to
market.
• Held-to-Maturity (HTM): These Securities are even longer-term, and you
don’t report unrealized Gains or Losses anywhere. Gains and Losses are
only reported when they’re actually sold."""
ADVANCED@Accounting@"""You own 70% of a company that generates Net Income of $10. Everything
above Net Income on your Income Statement has already been consolidated.
Walk me through how you would recognize Net Income Attributable to
Noncontrolling Interests, and how it affects the 3 statements."""@"""Income Statement: You show a line item for “Net Income Attributable to
Noncontrolling Interests” near the bottom. You subtract $3 (Other Company Net
Income of $10 * 30% You Don’t Own) to reflect the 30% of the other company’s
Net Income that does not “belong” to you.
At the bottom of the Income Statement, the “Net Income Attributable to Parent”
line item is down by $3.
Cash Flow Statement: Net Income is down by $3 as a result, but you add back
this same charge because you do, in fact, receive this Net Income in cash when
you own over 50% of the other company.
So cash at the bottom of the CFS remains unchanged.
Balance Sheet: There are no changes on the Assets side. On the other side, the
Noncontrolling Interests line item (included in Shareholders’ Equity) is up by $3
due to this Net Income, but Retained Earnings is down by $3 because of the
reduced Net Income at the bottom of the Income Statement, so this side doesn’t
change and the Balance Sheet remains in balance."""
ADVANCED@Accounting@"""Let’s continue with the same example, and assume that this other company
issues Dividends of $5. Walk me through how that’s recorded on the
statements."""@"""Income Statement: There are no changes because Dividends never show up on
the Income Statement.
Cash Flow Statement: There’s an additional Dividend of $5 under Cash Flow
from Financing on the CFS, so cash is down by $5.
Balance Sheet: The Assets side is down by $5 as a result and Shareholders’
Equity (Retained Earnings) is also down by $5.
Remember that the other company’s financial statements are consolidated
with your own when you own over 50% – you only split out Net Income
separately.
So there’s no need to multiply by ownership percentages or anything when
factoring in the impact of Dividends, or really any item other than Net Income."""
ADVANCED@Accounting@"""Now let’s take the opposite scenario and say that you own 30% of another
company. The other company earns Net Income of $20. Walk me through the 3
statements after you record the portion of Net Income that’s you’re entitled to."""@"""Here, nothing has been consolidated because we own less than 50% of the other
company. So nothing on the statements yet reflects this other company.
Income Statement: We create an item “Net Income from Equity Interests” (or
something similar) below our normal Net Income at the bottom, which results in
our real Net Income (Net Income Attributable to Parent) increasing by $6 ($20 *
30%).
Cash Flow Statement: Net Income is up by $6, but we subtract this $6 of
additional Net Income because we haven’t really received it in cash when we
own less than 50% - it’s not as if we control the other company and can just “take
it.” Cash remains unchanged.
Balance Sheet: The Investments in Equity Interests item on the Assets side
increases by $6 to reflect this Net Income, so the Assets side is up by $6. On the
other side, Shareholders’ Equity (Retained Earnings) is up by $6 to reflect the
increased Net Income, so both sides balance."""
ADVANCED@Accounting@"""Now let’s assume that this 30% owned company issues Dividends of $10.
Taking into account the changes from the last question, walk me through the 3
statements again and explain what’s different now."""@"""Income Statement: It’s the same: Net Income is up by $6 at the bottom.
Cash Flow Statement: Net Income is up by $6 and we then subtract out the $6
that’s attributable to the Equity Interests…
And then we ADD $3 ($10 * 30%) in the Cash Flow from Operations section to
reflect the Dividends that we receive from these Equity Interests.
So cash at the bottom is up by $3.
Balance Sheet: Cash is up by $3 on the Assets side, and the Investments in
Equity Interests line item is up by $6… but it falls by $3 due to those Dividends,
so the Assets side is up by $6 total.
On the other side, Net Income is up by $6 so Shareholders’ Equity (Retained
Earnings) is up by $6 and both sides balance.
The Investments in Equity Interests line item is like a “mini-Shareholder’s
Equity” for companies that you own less than 50% of – you add however much
Net Income you can “claim,” and then subtract your portion of the Dividends.
Remember that only the Dividends the parent company itself issues show up in
the Cash Flow from Financing section – Dividends received from other
companies (such as what you see in this example) do not."""
ADVANCED@Accounting@"""What if you now only own 10% of this company? Would anything change?"""@"""In theory, yes, because when you own less than 20%, the other company should
be recorded as a Security or Short-Term Investment and you would only factor in
the Dividends received but not the Net Income from the Other Company.
In practice, however, treatment varies and some companies may actually record
this scenario the same way, especially if they exert “significant influence” over
the 10% owned company."""
ADVANCED@Accounting@"""Walk me through what happens when you pay $20 in interest on Debt, with
$10 in the form of cash interest and $10 in the form of Paid-in-Kind (PIK)
interest."""@"""Income Statement: Both forms of interest appear, so Pre-Tax Income falls by $20
and Net Income falls by $12 at a 40% tax rate.
Cash Flow Statement: Net Income is down by $12 but you add back the $10 in
PIK interest since it’s non-cash, so Cash Flow from Operations is down by $2.
Cash at the bottom is also down by $2 as a result.
Balance Sheet: Cash is down by $2 so the Assets side is down by $2. On the other
side, Debt increases by $10 because PIK interest accrues to Debt, but
Shareholders’ Equity (Retained Earnings) falls by $12 due to the reduced Net
Income, so this side is also down by $2 and both sides balance.
PIK Interest is just like any other non-cash charge: it reduces taxes but must
affect something on the Balance Sheet – in this case, that’s the existing Debt
number."""
ADVANCED@Accounting@""" Due to a high issuance of Stock-Based Compensation and a fluctuating stock
price, a company has recorded a significant amount of Tax Benefits from
Stock-Based Compensation and Excess Tax Benefits from Stock-Based
Compensation.
Assume that it records $100 in Tax Benefits from SBC, with $40 of Excess Tax
Benefits from SBC, and walk me through the 3 statements. Ignore the original
Stock-Based Compensation issuance."""@"""Income Statement: No changes.
Cash Flow Statement: You add back the $100 in Tax Benefits from SBC in Cash
Flow from Operations, and subtract out the $40 in Excess Tax Benefits, so CFO is
up by $60.
Then, under Cash Flow from Financing, you add back the $40 in Excess Tax
Benefits, so Cash at the bottom is up by $100.
Balance Sheet: Cash is up by $100, so the Assets side is up by $100. On the other
side, Common Stock & APIC is up by $100 because Tax Benefits from SBC flow
directly into there.
The rationale: Essentially we’re “re-classifying” the Tax Benefits OUT of Cash
Flow from Operations and saying that they should accrue to the company’s
Shareholders’ Equity. And we are also saying that Excess Tax Benefits (which arise
due to share price increases) should be counted as a Financing activity but
should not impact cash, since they’re already a part of the normal Tax Benefits."""
ADVANCED@Accounting@"""A company records Book Depreciation of $10 per year for 3 years. On its Tax
financial statements, it records Depreciation of $15 in year 1, $10 in year 2, and
$5 in year 3.
Walk me through what happens on the BOOK financial statements in Year 1."""@"""Income Statement: On the Book Income Statement you list the Book
Depreciation number, so Pre-Tax Income falls by $10 and Net Income falls by $6
with a 40% tax rate.
On the Tax Income Statement, Depreciation was $15 so Net Income fell by $9
rather than $6. Taxes fell by $2 more on the Tax version (assume that prior to the
changes, Pre-Tax Income was $100 and Taxes were $40… Book Pre-Tax Income
afterward was therefore $90 and Tax Pre-Tax Income was $85. Book Taxes were
$36 and Cash Taxes were $34, so Book Taxes fell by $4 and Cash Taxes fell by $6).
Cash Flow Statement: On the Book Cash Flow Statement, Net Income is down
by $6, but you add back the Depreciation of $10 and you add back $2 worth of
Deferred Taxes – that represents the fact that Cash Taxes were lower than Book
Taxes in Year 1.
At the bottom, Cash is up by $6.
Balance Sheet: Cash is up by $6 but PP&E is down by $10 due to the
Depreciation, so the Assets side is down by $4.
On the other side, the Deferred Tax Liability increases by $2 due to the Book /
Cash Tax difference, but Shareholders’ Equity (Retained Earnings) is down by $6
due to the lower Net Income, so both sides are down by $4 and balance."""
ADVANCED@Accounting@"""Now let’s move to Year 2. What happens?"""@"""This one’s easy, because now Book and Tax Depreciation are the same.
Income Statement: Pre-Tax Income is down by $10 so Net Income falls by $6.
Cash Flow Statement: Net Income is down by $6 and you add back the $10 of
Depreciation on the CFS, but there are no changes to Deferred Taxes because
Book Depreciation = Tax Depreciation and therefore Book Taxes = Cash Taxes
this year. Cash at the bottom increases by $4.
Balance Sheet: Cash is up by $4 but PP&E is down by $10, so the Assets side is
down by $6. The other side is also down by $6 because Shareholders’ Equity
(Retained Earnings) is lower due to the reduced Net Income."""
ADVANCED@Accounting@"""And finally, let’s move to Year 3 – walk me through what happens on the
statements now."""@"""Income Statement: On the Book Income Statement, you use the Book
Depreciation number so Pre-Tax Income falls by $10 and Net Income falls by $6
with a 40% tax rate.
On the Tax Income Statement, Depreciation was $5 so Net Income fell by $3
rather than $6. Taxes fell by $2 more on the Tax version (assume that prior to the
changes, Pre-Tax Income was $100 and Taxes were $40… Book Pre-Tax Income
afterward was therefore $90 and Tax Pre-Tax Income was $95. Book Taxes were
$36 and Cash Taxes were $38, so Book Taxes fell by $4 and Cash Taxes fell by $2).
Cash Flow Statement: On the Book Cash Flow Statement, Net Income is down
by $6, but you add back the Depreciation of $10 and you subtract out $2 worth
of additional Cash Taxes – that represents the fact that Cash Taxes were higher
than Book Taxes in Year 1 (meaning that you’re now paying extra to make
“catch-up payments”).
At the bottom, Cash is up by $2.
Balance Sheet: Cash is up by $2 but PP&E is down by $10 due to the
Depreciation, so the Assets side is down by $8.
On the other side, the Deferred Tax Liability decreases by $2 due to the
Book/Cash Tax difference and Shareholders’ Equity (Retained Earnings) is down
by $6 due to the reduced Net Income, so both sides are down by $8 and balance."""
ADVANCED@Accounting@"""A company you’re analyzing records a Goodwill Impairment of $100.
However, this Goodwill Impairment is NOT deductible for cash tax purposes.
Walk me through how the 3 statements change."""@"""Income Statement: You still reduce Pre-Tax Income by $100 due to the
Impairment, so Net Income falls by $60 at a 40% tax rate – when it’s not tax-
deductible, you make that adjustment via Deferred Tax Liabilities or Deferred
Tax Assets.
On the Tax Income Statement, Pre-Tax Income has not fallen at all and so Net
Income stays the same… which means that Cash Taxes are $40 higher than Book
Taxes.
Cash Flow Statement: Net Income is down by $60, but we add back the $100
Impairment since it is non-cash.
Then, we also subtract $40 from Deferred Taxes because Cash Taxes were
higher than Book Taxes by $40 – meaning that we’ll save some cash (on paper)
from reduced Book Income Taxes in the future. Adding up all these changes,
there are no net changes in Cash.
Balance Sheet: Cash is the same but Goodwill is down by $100 due to the
Impairment, so the Assets side is down by $100.
On the other side, the Deferred Tax Liability is down by $40 and Shareholders’
Equity (Retained Earnings) is down by $60 due to the reduced Net Income, so
both sides are down by $100 and balance.
Intuition: When a charge is not truly tax-deductible, a firm pays higher Cash
Taxes and either “makes up for” owed future tax payments or gets to report
lower Book Taxes in the future.
Remember that DTLs get created when additional future cash taxes are owed –
when additional future cash taxes are paid, DTLs decrease."""
ADVANCED@Accounting@"""How can you tell whether or not a Goodwill Impairment will be tax-
deductible?"""@"""There’s no way to know for sure unless the company states it, but generally
Impairment on Goodwill from acquisitions is not deductible for tax purposes.
If it were, companies would have a massive incentive to start writing down the
values of their acquisitions and saving on taxes from non-cash charges – which
the government wouldn’t like too much.
Goodwill arising from other sources may be tax-deductible, but it’s rare to see
significant Impairment charges unless they’re from acquisitions."""
ADVANCED@Accounting@"""A company has Net Operating Losses (NOLs) of $100 included in the
Deferred Tax Asset (DTA) line item on its Balance Sheet because it has been
unprofitable up until this point.
Now, the company finally turns a profit and has Pre-Tax Income of $200 this
year. Walk me through the 3 statements and assume that the NOLs can be used
as a direct tax deduction on the financial statements."""@"""Income Statement: The company can apply the entire NOL balance to offset its
Pre-Tax Income, so Pre-Tax Income falls by $100 and Net Income falls by $60 at a
40% tax rate.
Cash Flow Statement: Net Income is down by $60 but the company hasn’t truly
lost anything – it has just saved on taxes. So you add back this use of NOLs and
label it “Deferred Taxes” – it should be a positive $100, which means that Cash at
the bottom is up by $40.
Balance Sheet: Cash is up by $40 and the Deferred Tax Asset is down by $100, so
the Assets side is down by $60. On the other side, Shareholders’ Equity (Retained
Earnings) is down by $60 due to the reduced Net Income, so both sides balance."""
ADVANCED@Accounting@"""You’re analyzing a company’s financial statements and you need to
calendarize the revenue, EBITDA, and other items.
The company has earned revenue of $1000 and EBITDA of $200 from January 1
to December 31, 2050. From January 1 to March 31, 2050, it earned revenue of
$200 and EBITDA of $50. From January 1 to March 31, 2051, it earned revenue
of $300 and EBITDA of $75.
What are the company’s revenue and EBITDA for the Trailing Twelve Months
as of March 31, 2051?"""@"""Trailing Twelve Months (TTM) = New Partial Period + Twelve-Month Period –
Old Partial Period
So in this case, TTM Revenue = $300 + $1000 – $200 = $1100 and TTM EBITDA =
$75 + $200 – $50 = $225."""
ADVANCED@Accounting@"""A company acquires another company for $1000 using 50% stock and 50%
cash. Here’s what the other company looks like:
• Assets of $1000 and Liabilities of $800.
Using that information, combine the companies’ financial statements and walk
me through what the Balance Sheet looks like IMMEDIATELY after the
acquisition."""@"""The acquirer has used $500 of cash and $500 of stock to acquire the seller, and the
seller’s Assets are worth $1000, with Liabilities of $800 and therefore Equity of
$200.
In an M&A deal the Equity of the seller gets wiped out completely. So you
simply add the seller’s Assets and Liabilities to the acquirer’s – the Assets side is
up by $1000 and the Liabilities side is up by $800.
Then, you subtract the cash used, so the Assets side is up by $500 only, and the
other side is up by $1300 due to the $800 of Liabilities and the $500 stock issuance.
Our Balance Sheet is out of balance… and that’s why we need Goodwill.
Goodwill equals the Purchase Price Minus the Seller’s Book Value, so in this case
it’s equal to $1000 – $200, or $800.
That $800 of Goodwill gets created on the Assets side, and so both sides are now
up by $1300 and the Balance Sheet balances."""
ADVANCED@Accounting@"""You’re analyzing a company with $100 in Short-Term Investments on its
Balance Sheet. These Investments are classified as Available-for-Sale (AFS)
Securities.
The market value for these securities increases to $110. Walk me through what
happens on the 3 statements."""@"""Income Statement: Since these are AFS securities, you do not reported
Unrealized Gains and Losses on the Income Statement. There are no changes.
Cash Flow Statement: There are no changes because no cash accounts change.
Balance Sheet: The Short-Term Investments line item increases by $10 on the
Assets side and Accumulated Other Comprehensive Income (AOCI) increases by
$10 on the other side under Shareholders’ Equity, so the Balance Sheet balances."""
ADVANCED@Accounting@"""Now let’s say that these were classified as Trading Securities instead –
walk me through the 3 statements after their value increases by $10."""@"""With Trading Securities, you do show Unrealized Gains and Losses on the
Income Statement.
Income Statement: Both Operating Income and Pre-Tax Income increase by $10,
and so Net Income increases by $6 at a 40% tax rate.
Cash Flow Statement: Net Income is up by $6, but you subtract the Unrealized
Gain of $10 because it’s non-cash, so Cash at the bottom is down by $4.
Balance Sheet: Cash is down by $4 on the Assets side and Short-Term
Investments is up by $10, so the Assets side is up by $6 overall.
On the other side, Shareholders’ Equity (Retained Earnings) is up by $6 due to
the increased Net Income.
Intuition: We’ve paid taxes on a non-cash source of income, so cash is down.
However, the paper value of our Assets has increased."""
BASIC@EV@"""Why do we look at both Enterprise Value and Equity Value?"""@"""Enterprise Value represents the value of the company that is attributable to all
investors; Equity Value only represents the portion available to shareholders
(equity investors).
You look at both because Equity Value is the number the public-at-large sees
(“the sticker price”), while Enterprise Value represents its true value, i.e. what it
would really cost to acquire."""
BASIC@EV@"""How do you use Equity Value and Enterprise Value differently?"""@"""Equity Value gives you a general idea of how much a company is worth;
Enterprise Value tells you, more specifically, how much it would cost to acquire.
Also, you use them differently depending on the valuation multiple you’re
calculating. If the denominator of the multiple includes interest income and
expense (e.g. Net Income), you use Equity Value; otherwise, if it does not (e.g.
EBITDA), you use Enterprise Value."""
BASIC@EV@"""What’s the formula for Enterprise Value?"""@"""Enterprise Value = Equity Value + Debt + Preferred Stock + Noncontrolling
Interests – Cash
This is a “simplified” formula that you can usually get away with in interviews –
for a more complete version see the More Advanced questions below."""
BASIC@EV@"""Why do you need to add Noncontrolling Interests to Enterprise Value?"""@"""Whenever a company owns over 50% of another company, it is required to
report 100% of the financial performance of the other company as part of its own
performance.
So even though it doesn’t own 100%, it reports 100% of the majority-owned
subsidiary’s financial performance.
You must add the Noncontrolling Interest to get to Enterprise Value so that your
numerator and denominator both reflect 100% of the majority-owned subsidiary.
If you did not do that, the numerator would reflect less than 100% of the
company, but the denominator would reflect 100%."""
BASIC@EV@"""How do you calculate diluted shares and Diluted Equity Value?"""@"""Take the basic share count and add in the dilutive effect of stock options and any
other dilutive securities, such as warrants, convertible debt, and convertible
preferred stock.
To calculate the dilutive effect of options and warrants, you use the Treasury
Stock Method (see the Calculations questions below)."""
BASIC@EV@"""Why do we bother calculating share dilution? Does it even make much of a
difference?"""@"""We do it for the same reason we calculate Enterprise Value: to more accurately
determine the cost of acquiring a company.
Normally in an acquisition scenario, in-the-money securities (ones that will
cause additional shares to be created) are 1) Cashed out and paid by the buyer
(raising the purchase price), or 2) Are converted into equivalent securities for the
buyer (also raising the effective price for the buyer).
Dilution doesn’t always make a big difference, but it can be as high as 5-10% (or
more) so you definitely want to capture that."""
BASIC@EV@"""Why do you subtract Cash in the formula for Enterprise Value? Is that
always accurate?"""@"""In an acquisition, the buyer would “get” the cash of the seller, so it effectively
pays less for the company based on how large its cash balance is. Remember,
Enterprise Value tells us how much you’d effectively have to “pay” to acquire
another company.
It’s not always accurate because technically you should subtract only excess cash
– the amount of cash a company has above the minimum cash it requires to
operate.
But in practice, the minimum cash required by a company is difficult to
determine; also, you want the Enterprise Value calculation to be relatively
standardized among different companies, so you normally just subtract the
entire cash balance."""
BASIC@EV@"""Is it always accurate to add Debt to Equity Value when calculating
Enterprise Value?"""@"""In most cases, yes, because the terms of a Debt issuance usually state that Debt
must be repaid in an acquisition. And a buyer usually pays off a seller’s Debt, so
it is accurate to say that Debt “adds” to the purchase price.
Adding Debt is also partially a matter of standardizing the Enterprise Value
calculation among different companies: if you added it for some and didn’t add
it for others, EV would no longer mean the same thing and valuation multiples
would be off."""
BASIC@EV@"""Could a company have a negative Enterprise Value? What does that mean?"""@"""Yes. It means that the company has an extremely large cash balance, or an
extremely low market capitalization (or both). You often see it with companies
on the brink of bankruptcy, and sometimes also with companies that have
enormous cash balances."""
BASIC@EV@"""Could a company have a negative Equity Value? What would that mean?"""@"""No. This is not possible because you cannot have a negative share count and you
cannot have a negative share price."""
BASIC@EV@"""Why do we add Preferred Stock to get to Enterprise Value?"""@"""Preferred Stock pays out a fixed dividend, and Preferred Shareholders also have
a higher claim to a company’s assets than equity investors do. As a result, it is
more similar to Debt than common stock. Also, just like Debt, typically Preferred
Stock must be repaid in an acquisition scenario."""
BASIC@EV@"""How do you factor in Convertible Bonds into the Enterprise Value
calculation?"""@"""If the convertible bonds are in-the-money, meaning that the conversion price of
the bonds is below the current share price, then you count them as additional
dilution to the Equity Value (no Treasury Stock Method required – just add all
the shares that would be created as a result of the bonds).
If the Convertible Bonds are out-of-the-money, then you count the face value of
the convertibles as part of the company’s Debt.
See the “Calculations” section for an example of how to do the math."""
BASIC@EV@"""What’s the difference between Equity Value and Shareholders’ Equity?"""@"""Equity Value is the market value and Shareholders’ Equity is the book value.
Equity Value could never be negative because shares outstanding and share
prices can never be negative, whereas Shareholders’ Equity could be positive,
negative, or 0.
For healthy companies, Equity Value usually far exceeds Shareholders’ Equity
because the market value of a company’s stock is worth far more than its paper
value. In some industries (e.g. commercial banks and insurance firms), Equity
Value and Shareholders’ Equity tend to be very close."""
BASIC@EV@"""Should you use Enterprise Value or Equity Value with Net Income when
calculating valuation multiples?"""@"""Since Net Income includes the impact of interest income and interest expense,
you always use Equity Value."""
BASIC@EV@"""Why do you use Enterprise Value for Unlevered Free Cash Flow multiples,
but Equity Value for Levered Free Cash Flow multiples? Don’t they both just
measure cash flow?"""@"""They both measure cash flow, but Unlevered Free Cash Flow (Free Cash Flow to
Firm) excludes interest income and interest expense (and mandatory debt
repayments), whereas Levered Free Cash Flow includes interest income and
interest expense (and mandatory debt repayments), meaning that only Equity
Investors are entitled to that cash flow (see the funnel diagram above).
Therefore, you use Equity Value for Levered Free Cash Flow and Enterprise
Value for Unlevered Free Cash Flow."""
BASIC@EV@"""Let’s say we create a brand-new operating metric for a company that
approximates its cash flow. Should we use Enterprise Value or Equity Value in
the numerator when creating a valuation multiple based on this metric?"""@"""It depends on whether or not this new metric includes the impact of interest
income and interest expense. If it does, you use Equity Value. If it does not, you
use Enterprise Value… starting to notice a pattern here?"""
ADVANCED@EV@"""Can you describe a few of the additional items that might be a part of
Enterprise Value, beyond Cash, Debt, Preferred Stock, and Noncontrolling
Interests, and explain whether you add or subtract each one?"""@"""See the Key Rules of Thumb section above for more detail – here’s a summary:
Items That May Be Counted as Cash-Like Items and Subtracted:
• Net Operating Losses – Because you can use these to reduce future taxes;
may or may not be true depending on the company and deal.
• Short-Term and Long-Term Investments – Because theoretically you can
sell these off and get extra cash. May not be true if they’re illiquid.
• Equity Investments – Any investments in other companies where you
own between 20% and 50%; this one is also partially for comparability
purposes since revenue and profit from these investments shows up in the
company’s Net Income, but not in EBIT, EBITDA, and Revenue (see the
Accounting section).
Items That May Be Counted as Debt-Like Items and Added:
• Capital Leases – Like Debt, these have interest payments and may need to
be repaid.
• (Some) Operating Leases – Sometimes you need to convert Operating
Leases to Capital Leases and add them as well, if they meet the criteria for
qualifying as Capital Leases (see the Accounting section).
• Unfunded Pension Obligations – These are usually paid with something
other than the company’s normal cash flows, and they may be extremely
large.
• Restructuring / Environmental Liabilities – Similar logic to Unfunded
Pension Obligations.
Note that many of these items are discretionary.
Everyone agrees that Cash should be subtracted and Debt should be added when
calculating Enterprise Value, but when you get to more advanced items,
treatment varies greatly between different banks and different groups.
A more “complete” formula might be: Enterprise Value = Equity Value – Cash +
Debt + Preferred Stock + Noncontrolling Interests – NOLs – Investments – Equity
Investments + Capital Leases + Unfunded Pension Obligations and Other
Liabilities.
In interviews you can usually get away with stating, “Enterprise Value = Equity
Value – Cash + Debt + Preferred Stock + Noncontrolling Interests.”
You should stick with that simplified formula unless you feel very confident in
your knowledge, or unless they ask you for the more advanced items."""
ADVANCED@EV@"""Wait a second, why might you add back Unfunded Pension Obligations but
not something like Accounts Payable? Don’t they both need to be repaid?"""@"""The distinctions are magnitude and source of funds. Accounts Payable, 99% of
the time, is paid back via the company’s cash flow from its normal business
operations. And it tends to be relatively small.
Items like Unfunded Pension Obligations, by contrast, usually require additional
funding (e.g. the company raises Debt) to be repaid. These types of Liabilities
also tend to be much bigger than Working Capital / Operational Asset and
Liability items."""
ADVANCED@EV@"""Are there any exceptions to the rules about subtracting Equity Interests and
adding Noncontrolling Interests when calculating Enterprise Value?"""@"""You pretty much always add Noncontrolling Interests because the financial
statements are always consolidated when you own over 50% of another
company.
But with Equity Interests, you only subtract them if the metric you’re looking at
does not include Net Income from Equity Interests (which only appears toward
the bottom of the Income Statement).
For example, Revenue, EBIT, and EBITDA all exclude revenue and profit from
Equity Interests, so you subtract Equity Interests.
But with Levered Free Cash Flow (Free Cash Flow to Equity), typically you’re
starting with Net Income Attributable to Parent… which already includes Net
Income from Equity Interests.
Normally you subtract that out in the CFO section of the Cash Flow Statement so
you would still subtract Equity Interests if you calculate Free Cash Flow by going
through all the items in that section.
But if you have not subtracted out Net Income from Equity Interests (if you’ve
used some other formula to calculate FCF), you should not subtract it in the
Enterprise Value calculation – you want to show its impact in that case.
This is a very subtle point, but you were warned: these are Advanced questions.
Most bankers would probably not understand the explanation above."""
ADVANCED@EV@"""Should you use the Book Value or Market Value of each item when
calculating Enterprise Value?"""@"""Technically, you should use market value for everything. In practice, however,
you usually use market value only for the Equity Value portion because it’s
difficult to determine market values for the rest of the items in the formula – so
you take the numbers from the company’s Balance Sheet."""
ADVANCED@EV@"""What percentage dilution in Equity Value is “too high?”"""@"""There’s no strict “rule” here, but most bankers would say that anything over 10%
is odd. If the basic Equity Value is $100 million and the diluted Equity Value is
$115 million, you might want to check your calculations – it’s not necessarily
wrong, but over 10% dilution is unusual for most companies. And something
like 50% dilution would be highly unusual."""
ADVANCED@EV@"""How do you factor in Convertible Preferred Stock in the Enterprise Value
calculation?"""@"""The same way you factor in normal Convertible Bonds: if it’s in-the-money, you
assume that new shares get created, and if it’s not in the money, you count it as
Debt."""
ADVANCED@EV@"""How do you factor in Restricted Stock Units (RSUs) and Performance Shares
when calculating Diluted Equity Value?"""@"""RSUs should be added to the common share count, because they are just
common shares. The only difference is that the employees who own them have
to hold onto them for a number of years before selling them.
Performance Shares are similar to Convertible Bonds, but if they’re not in-the-
money (the share price is below the performance share price target), you do not
count them as Debt – you just ignore them altogether. If they are in-the-money,
you assume that they are normal common shares and add them to the share
count."""
ADVANCED@EV@"""What’s the distinction between Options Exercisable vs. Options
Outstanding? Which one(s) should you use when calculating share dilution?"""@"""• Options Exercisable vs. Options Outstanding: Normally companies put
in place restrictions on when employees can actually exercise options – so
even if there are 1 million options outstanding right now, only 500,000
may actually be exercisable even if they’re all in-the-money.
There’s no “correct” answer for which one to use here. Some people argue that
you should use Options Outstanding because typically, all non-exercisable
Options become exercisable in an acquisition, so that’s the more accurate way to
view it.
Others argue that Options Exercisable is better because you don’t know whether
or not the non-exercisable ones will become exercisable until the acquisition
happens.
However you treat it, you need to be consistent with all the companies you
analyze."""
ADVANCED@EV@"""Let’s say a company has 100 shares outstanding, at a share price of $10.00
each. It also has 10 options outstanding at an exercise price of $5.00 each – what
is its Diluted Equity Value?"""@"""Its basic equity value is $1,000 (100 * $10 = $1,000). To calculate the dilutive effect
of the options, first you note that the options are all “in-the-money” – their
exercise price is less than the current share price.
When these options are exercised, 10 new shares get created – so the share count
is now 110 rather than 100.
However, that doesn’t tell the whole story. In order to exercise the options, we
had to “pay” the company $5 for each option (the exercise price).
As a result, it now has $50 in additional cash, which it uses to buy back 5 of the
new shares we created.
So the fully diluted share count is 105 and the Diluted Equity Value is $1,050."""
ADVANCED@EV@"""Let’s say a company has 100 shares outstanding, at a share price of $10 each.
It also has 10 options outstanding at an exercise price of $15 each – what is its
Diluted Equity Value?"""@"""$1,000. In this case the options’ exercise price is above the current share price, so
they have no dilutive effect."""
ADVANCED@EV@"""A company has 1 million shares outstanding at a value of $100 per share. It
also has $10 million of convertible bonds, with par value of $1,000 and a
conversion price of $50. How do I calculate diluted shares outstanding?"""@"""This gets confusing because of the different units involved. First, note that these
convertible bonds are in-the-money because the company’s share price is $100,
but the conversion price is $50. So we count them as additional shares rather than
debt.
Next, we need to divide the value of the convertible bonds – $10 million – by the
par value – $1,000 – to figure out how many individual bonds there are:
$10 million / $1,000 = 10,000 convertible bonds.
Next, we need to figure out how many shares this number represents. The
number of shares per bond is the par value divided by the conversion price:
$1,000 / $50 = 20 shares per bond.
So we have 200,000 new shares (20 * 10,000) created by the convertibles, giving us
1.2 million diluted shares outstanding.
We do not use the Treasury Stock Method with convertibles because we do not
pay the company anything to “convert” the convertibles – it just becomes an
option automatically once the share price exceeds the conversion price."""
ADVANCED@EV@"""Let’s say that a company has 10,000 shares outstanding and a current share
price of $20.00. It also has 100 options outstanding at an exercise price of $10.00.
It also has 50 Restricted Stock Units (RSUs) outstanding.
Finally, it also has 100 convertible bonds outstanding, at a conversion price of
$10.00 and par value of $100.
What is its Diluted Equity Value?"""@"""First, let’s tackle the options outstanding: since they are in-the-money (exercise
price is lower than the share price), we assume that they get exercised and that
100 new shares get created.
The company receives 100 * $10.00, or $1,000, in proceeds. Its share price is $20.00
so it can repurchase 50 shares with these proceeds. Overall, there are 50
additional shares outstanding now (100 new shares – 50 repurchased).
The 50 RSUs get added as if they were common shares, so now there’s a total of
100 additional shares outstanding.
For the convertible bonds, the conversion price of $10.00 is below the company’s
current share price of $20.00, so conversion is allowed.
We divide the par value by the conversion price to see how many new shares per
bond get created:
$100 / $10.00 = 10 new shares per bond
Since there are 100 convertible bonds outstanding, we therefore get 1,000 new
shares (100 convertible bonds * 10 new shares per bond).
In total, there are 1,100 additional shares outstanding. The diluted share count is
therefore 11,100.
The Diluted Equity Value is 11,100 * $20.00, or $222,000."""
ADVANCED@EV@"""This same company also has Cash of $10,000, Debt of $30,000, and
Noncontrolling Interests of $15,000. What is its Enterprise Value?"""@"""You subtract the Cash, add the Debt, and then add Noncontrolling Interests:
Enterprise Value = $222,000 – $10,000 + $30,000 + $15,000 = $257,000."""
BASIC@Valuation@"""What are the 3 major valuation methodologies?"""@"""Public Company Comparables (Public Comps), Precedent Transactions and the
Discounted Cash Flow Analysis.
Public Comps and Precedent Transactions are examples of relative valuation
(based on market values), while the DCF is intrinsic valuation (based on cash
flows)."""
BASIC@Valuation@"""Can you walk me through how you use Public Comps and Precedent
Transactions?"""@"""First, you select the companies and transactions based on criteria such as
industry, financial metrics, and geography (see the next question).
Then, you determine the appropriate metrics and multiples for each set – for
example, revenue, revenue growth, EBITDA, EBITDA margins, and revenue and
EBITDA multiples – and you calculate them for all the companies and
transactions.
Next, you calculate the minimum, 25th percentile, median, 75th percentile, and
maximum for each valuation multiple in the set.
Finally, you apply those numbers to the financial metrics for the company you’re
analyzing to estimate the potential range for its valuation.
For example, if the company you’re valuing has $100 million in EBITDA and the
median EBITDA multiple of the set is 7x, its implied Enterprise Value is $700
million based on that. You would then calculate its value at other multiples in
this range."""
BASIC@Valuation@"""How do you select Comparable Companies or Precedent Transactions?"""@"""The 3 main criteria for selecting companies and transactions:
1. Industry classification
2. Financial criteria (Revenue, EBITDA, etc.)
3. Geography
For Precedent Transactions, you also limit the set based on date and often focus
on transactions within the past 1-2 years.
The most important factor is industry – that is always used to screen for
companies/transactions, and the rest may or may not be used depending on how
specific you want to be.
Here are a few examples:
• Comparable Company Screen: Oil & gas producers with market caps
over $5 billion.
• Comparable Company Screen: Digital media companies with over $100
million in revenue.
• Precedent Transaction Screen: Airline M&A transactions over the past 2
years involving sellers with over $1 billion in revenue.
• Precedent Transaction Screen: Retail M&A transactions over the past year."""
BASIC@Valuation@"""For Public Comps, you calculate Equity Value and Enterprise Value for use
in multiples based on companies’ share prices and share counts… but what
about for Precedent Transactions? How do you calculate multiples there?"""@"""They should be based on the purchase price of the company at the time of the
deal announcement.
For example, a seller’s current share price is $40.00 and it has 10 million shares
outstanding. The buyer announces that it will pay $50.00 per share for the seller.
The seller’s Equity Value in this case, in the context of the transaction, would be
$50.00 * 10 million shares, or $500 million. And then you would calculate its
Enterprise Value the normal way: subtract cash, add debt, and so on.
You only care about what the offer price was at the initial deal announcement.
You never look at the company’s value prior to the deal being announced."""
BASIC@Valuation@"""How would you value an apple tree?"""@"""The same way you would value a company: by looking at what comparable
apple trees are worth (relative valuation) and the present value of the apple
tree’s cash flows (intrinsic valuation). Yes, you could build a DCF for anything –
even an apple tree."""
BASIC@Valuation@"""When is a DCF useful? When is it not so useful?"""@"""A DCF is best when the company is large, mature, and has stable and predictable
cash flows (think: Fortune 500 companies in “boring” industries). Your far-in-
the-future assumptions will generally be more accurate there.
A DCF is not as useful if the company has unstable or unpredictable cash flows
(tech start-up) or when Debt and Operating Assets and Liabilities serve
fundamentally different roles (ex: Banks and Insurance Firms – see the industry-
specific guides for more)."""
BASIC@Valuation@"""What other Valuation methodologies are there?"""@"""Liquidation Valuation – Valuing a company’s Assets, assuming they are sold
off and then subtracting Liabilities to determine how much capital, if any,
equity investors receive.
• LBO Analysis – Determining how much a PE firm could pay for a company
to hit a “target” IRR, usually in the 20-25% range.
• Sum of the Parts – Valuing each division of a company separately and
adding them together at the end.
• M&A Premiums Analysis – Analyzing M&A deals and figuring out the
premium that each buyer paid, and using this to establish what your
company is worth.
• Future Share Price Analysis – Projecting a company’s share price based on
the P / E multiples of the public company comparables and then discounting
it back to its present value."""
BASIC@Valuation@"""When is a Liquidation Valuation useful?"""@"""It’s most common in bankruptcy scenarios and is used to see whether or not
shareholders will receive anything after the company’s Liabilities have been paid
off with the proceeds from selling all its Assets.
It is often used to advise struggling businesses on whether it’s better to sell off
Assets separately or to sell 100% of the company."""
BASIC@Valuation@"""When would you use a Sum of the Parts valuation?"""@"""This is used when a company has completely different, unrelated divisions – a
conglomerate like General Electric, for example.
If you have a plastics division, a TV and entertainment division, an energy
division, a consumer financing division, and a technology division, you should
not use the same set of Comparable Companies and Precedent Transactions for
the entire company.
Instead, you should use different sets for each division, value each one separately,
and then add them together to calculate the Total Value."""
BASIC@Valuation@"""When do you use an LBO Analysis as part of your Valuation?"""@"""Clearly, you use this whenever you’re analyzing a Leveraged Buyout – but it is
also used to “set a floor” on the company’s value and determine the minimum
amount that a PE firm could pay to achieve its targeted returns.
You often see it used when both strategics (normal companies) and financial
sponsors (PE firms) are competing to buy the same company, and you want to
determine the potential price if a PE firm were to acquire the company."""
BASIC@Valuation@"""How do you apply the valuation methodologies to value a company?"""@"""You would present everything in a “Football Field” graph such as the one shown
below:
'Basically categorize 3 different types i.e. Precedent Transaction, Public Comparables and DCF and for each show different variations and multiples highlighting min, 25th, median, 75th and 100th percentile. For all highlighting where the valuation lies'
To do this, you need to calculate the minimum, 25th percentile, median, 75th
percentile, and maximum for each set (2-3 years of comps and the transactions,
for each different multiple used) and then multiply by the relevant metrics for
the company you’re analyzing.
Example: If the median EBITDA multiple from your set of Precedent
Transactions is 8x and your company’s EBITDA is $500 million, the implied
Enterprise Value would be $4 billion.
For public companies, you will also work backwards to calculate the Equity
Value and the implied Per Share Price based on this."""
BASIC@Valuation@"""Can you walk me through how to calculate EBIT and EBITDA? How are
they different?"""@"""EBIT is just a company’s
Operating Income on its
Income Statement; it includes
not only COGS and
Operating Expenses, but also
non-cash charges such as
Depreciation & Amortization
and therefore reflects, at least indirectly, the company’s Capital Expenditures.
EBITDA is defined as EBIT plus Depreciation plus Amortization. You may
sometimes add back other expenses as well (see the Advanced section).
The idea of EBITDA is to move closer to a company’s “cash flow,” since D&A are
both non-cash expenses… but there’s a problem with that since you’re also
excluding CapEx altogether."""
BASIC@Valuation@"""What about how you calculate Unlevered FCF (Free Cash Flow to Firm) and
Levered FCF (Free Cash Flow to Equity)?"""@"""There are several methods (see the DCF section), but the simplest ways:
Unlevered FCF = EBIT * (1 – Tax Rate) + Non-Cash Charges – Change in
Operating Assets and Liabilities – CapEx
With Unlevered FCF, you’re excluding interest income and expenses, as well as
mandatory debt repayments.
Levered FCF = Net Income + Non-Cash Charges – Change in Operating Assets
and Liabilities – CapEx – Mandatory Repayments
With Levered FCF, you’re including interest income, interest expense, and
required principal repayments on the debt."""
BASIC@Valuation@"""What are the most common Valuation multiples? And what do they mean?"""@"""What are the most common Valuation multiples? And what do they mean?
• Enterprise Value / Revenue: How valuable is a company in relation to its
overall sales.
• Enterprise Value / EBITDA: How valuable is a company in relation to its
approximate cash flow.
• Enterprise Value / EBIT: How valuable is a company in relation to the
pre-tax profit it earns from its core business operations.
• Price Per Share / Earnings Per Share (P / E): How valuable is a company
in relation to its after-tax profits, inclusive of interest income and expense
and other non-core business activities.
Other multiples include Price Per Share / Book Value Per Share (P / BV),
Enterprise Value / Unlevered FCF, and Equity Value / Levered FCF.
P / BV is not terribly meaningful for most companies; EV / Unlevered FCF is
closer to true cash flow than EV / EBITDA but takes more work to calculate; and
Equity Value / Levered FCF is even closer, but it’s influenced by the company’s
capital structure and takes even more time to calculate."""
BASIC@Valuation@"""How are the key operating metrics and valuation multiples correlated? In
other words, what might explain a higher or lower EV / EBITDA multiple?"""@"""Usually, there is a correlation between growth and valuation multiples. So if one
company is growing revenue or EBITDA more quickly, its multiples for both of
those may be higher as well.
However, math also plays a role and sometimes companies with extremely high
EBITDA margins (for example) may have lower EBITDA multiples because
EBITDA itself is much higher to begin with… and it’s in the denominator.
Finally, keep in mind that plenty of other non-financial factors explain higher or
lower multiples (see the “Real-World” section)."""
BASIC@Valuation@"""Why can’t you use Equity Value / EBITDA as a multiple rather than
Enterprise Value / EBITDA?"""@"""Remember our funnel chart from
the previous section on Equity
Value and Enterprise Value (see:
right image).
If the metric includes interest
income and expense, you use
Equity Value; if it excludes them
(or is “before” them), you use
Enterprise Value.
EBITDA is available to all investors in the company – not just common
shareholders. Similarly, Enterprise Value is also available to all investors since it
includes Equity and Debt, so you pair them together.
Calculating Equity Value / EBITDA, however, is comparing apples to oranges
because Equity Value does not reflect the company’s entire capital structure –
only what’s available to common shareholders."""
BASIC@Valuation@"""What would you use with Free Cash Flow multiples – Equity Value or
Enterprise Value?"""@"""Trick question. For Unlevered Free Cash Flow (Free Cash Flow to Firm), you
would use Enterprise Value, but for Levered Free Cash Flow (Free Cash Flow to
Equity) you would use Equity Value (see the diagram above).
Remember, Unlevered Free Cash Flow excludes Interest (and mandatory debt
repayments) and thus represents money available to all investors, whereas
Levered FCF already includes the effects of Interest expense (and mandatory
debt repayments) and the money is therefore only available to equity investors.
Debt investors have already “been paid” with the interest payments and
principal repayments they received."""
BASIC@Valuation@"""Why does Warren Buffett prefer EBIT multiples to EBITDA multiples?"""@"""Warren Buffett once famously asked, ""Does management think the tooth fairy
pays for capital expenditures?”
He dislikes EBITDA because it hides the Capital Expenditures companies make
and disguises how much cash they require to finance their operations.
In some industries there is also a large gap between EBIT and EBITDA –
anything that is capital-intensive and asset-heavy, for example, will show a big
disparity.
Note that EBIT itself does not include Capital Expenditures, but it does include
Depreciation and that is directly linked to CapEx – that’s the connection. If a
company has a high Depreciation expense, chances are it has high CapEx
spending as well."""
BASIC@Valuation@"""What are some problems with EBITDA and EBITDA multiple? And if there
are so many problems, why do we still use it?"""@"""First, it hides the amount of debt principal and interest that a company is paying
each year, which can be very large and may make the company cash flow-
negative; as mentioned above, it also hides CapEx spending, which can also be
huge.
EBITDA also ignores working capital requirements (e.g. Accounts Receivable,
Inventory, Accounts Payable), which can be very large for some companies.
Finally, companies like to “add back” many charges and expenses to EBITDA, so
you never really know what it represents unless you dig into it in-depth.
So in many cases, EBITDA is not even close to true “cash flow” – it is widely
used mostly because of convenience (it’s easy to calculate) and because it has
become a standard over time.
Another argument for EBITDA is that although it’s not close to cash flow, it’s
better for comparing the cash generated by a company’s core business operations
than other metrics – so you could say that EBITDA is more about comparability
than cash flow approximation."""
BASIC@Valuation@"""The EV / EBIT, EV / EBITDA, and P / E multiples all measure a company’s
profitability. What’s the difference between them, and when do you use each
one?"""@"""P / E depends on the company’s capital structure, whereas EV / EBIT and EV /
EBITDA are capital structure-neutral. Therefore, you use P / E for banks,
insurance firms, and other companies where interest is critical and where capital
structures tend to be similar.
EV / EBIT includes Depreciation & Amortization, whereas EV / EBITDA excludes
it – you’re more likely to use EV / EBIT in industries where D&A is large and
where Capital Expenditures and fixed assets are important (e.g. manufacturing),
and EV / EBITDA in industries where fixed assets are less important and where
D&A is comparatively smaller (e.g. Internet companies).
NOTE: Many bankers get this logic reversed and think that EV / EBITDA is
better when CapEx and Depreciation are both large… which is not correct, if you
take a second to think about it. If they start arguing about it an interview, just
give in and agree with what they say."""
BASIC@Valuation@"""Could EV / EBITDA ever be higher than EV / EBIT for the same company?"""@"""No. By definition, EBITDA must be greater than or equal to EBIT because to
calculate it, you take EBIT and then add Depreciation & Amortization, neither of
which can be negative (they could, however, be $0, at least theoretically).
Since EBITDA is always greater than or equal to EBIT, EV / EBITDA must always
be less than or equal to EV / EBIT for a single company."""
BASIC@Valuation@"""What are some examples of industry-specific multiples?"""@"""Technology (Internet): EV / Unique Visitors, EV / Pageviews
• Retail / Airlines: EV / EBITDAR (Earnings Before Interest, Taxes,
Depreciation, Amortization & Rental Expense)
• Oil & Gas: EV / EBITDAX (Earnings Before Interest, Taxes, Depreciation,
Amortization & Exploration Expense), EV / Production, EV / Proved
Reserves
• Real Estate Investment Trusts (REITs): Price / FFO per Share, Price /
AFFO per Share (Funds from Operations, Adjusted Funds from
Operations)
Technology and Oil & Gas should be straightforward – you’re looking at website
traffic and energy reserves as value drivers rather than revenue or profit.
For Retail / Airlines, you add back Rent because some companies own their own
buildings and capitalize the expense whereas others rent and therefore have a
rental expense. This one is about comparability rather than cash flow
approximation.
The EBITDAX metric for Oil & Gas exists because some companies capitalize (a
portion of) their exploration expenses and some expense them. You add back the
exploration expense to normalize the numbers – once again, comparability, not
cash flow.
For REITs, Funds from Operations is a common metric that adds back
Depreciation and subtracts Gains (and adds Losses) on the sale of property.
Depreciation is a non-cash yet extremely large expense in real estate, and Gains
and Losses on property sales are assumed to be non-recurring, so FFO is a more
“normalized” picture of earnings than Net Income."""
BASIC@Valuation@"""When you’re looking at an industry-specific multiple like EV / Proved
Reserves or EV / Subscribers (for telecom companies, for example), why do
you use Enterprise Value rather than Equity Value?"""@"""You use Enterprise Value because those Proved Reserves or Subscribers are
“available” to all the investors (both debt and equity) in a company. This is
almost always the case unless the metric already includes interest income and
expense (FFO and AFFO above)."""
BASIC@Valuation@"""Rank the 3 main valuation methodologies from highest to lowest expected
value."""@"""Trick question – there is no ranking that always holds up.
In general, Precedent Transactions will be higher than Comparable Public
Companies due to the Control Premium built into acquisitions (i.e. the buyer
must pay a premium over a company’s current share price to acquire it).
Beyond that, a DCF could go either way and it’s best to say that it’s more variable
than other methodologies. Often it produces the highest value, but it can produce
the lowest value as well depending on your assumptions."""
BASIC@Valuation@"""Would an LBO or DCF produce a higher valuation?"""@"""Technically it could go either way, but in most cases the LBO will give you a
lower valuation.
Here’s the easiest way to think about it: with an LBO, you do not get any value
from the cash flows of a company in between Year 1 and the final year – you
only get “value” out of its final year.
With a DCF, by contrast, you’re taking into account both the company’s cash
flows in the period itself and its terminal value, so values tend to be higher.
Note: Unlike a DCF, an LBO model by itself does not give a specific valuation.
Instead, you set a desired IRR and back-solve for how much you could pay for
the company (the valuation) based on that. See the LBO section of the guide for
more."""
BASIC@Valuation@"""When would a Liquidation Valuation produce the highest value?"""@"""This is highly unusual, but it could happen if a company had substantial hard
assets but the market was severely undervaluing it for a specific reason (such as
an earnings miss or cyclicality).
As a result, the Comparable Companies and Precedent Transactions would likely
produce lower values as well – and if its assets were valued highly enough,
Liquidation Valuation might give a higher value than other methodologies."""
BASIC@Valuation@"""Why are Public Comps and Precedent Transactions sometimes viewed as
being “more reliable” than a DCF?"""@"""It’s because they’re based on actual market data, as opposed to assumptions far
into the future.
Note, however, that you still do make future assumptions even with these (for
example, the “Forward Year 1” and “Forward Year 2” multiples in the graphs
above are based on projections for each company in the set).
Also note that sometimes you don’t have good or truly comparable data for these,
in which case a DCF may produce better results."""
BASIC@Valuation@"""What are the flaws with Public Company Comparables?"""@"""• No company is 100% comparable to another company.
• The stock market is “emotional” – your multiples might be dramatically
higher or lower on certain dates depending on the market’s movements.
• Share prices for small companies with thinly-traded stocks may not reflect
their full value."""
BASIC@Valuation@"""You mentioned that Precedent Transactions usually produce a higher value
than Comparable Companies – can you think of a situation where this is not
the case?"""@"""Sometimes this happens when there is a substantial mismatch between the M&A
market and the public markets. For example, no public companies have been
acquired recently but lots of small private companies have been acquired at low
valuations.
For the most part this generalization is true but there are exceptions to almost
every “rule” in finance.
And if you want proof, just take a look at the valuation graph we’ve been using
throughout this part of the guide."""
BASIC@Valuation@"""What are some flaws with Precedent Transactions?"""@"""• Past transactions are rarely 100% comparable – the transaction structure,
size of the company, and market sentiment all make a huge impact.
• Data on precedent transactions is generally more difficult to find than it is
for public company comparables, especially for acquisitions of small,
private companies."""
BASIC@Valuation@"""How would you present these Valuation methodologies to a company or its
investors? And what do you use it for?"""@"""Usually you use a “Football Field” chart where you show the valuation range
implied by each methodology. You always show a range rather than one specific
number.
Once again, see the graph we’ve been using throughout this section of the guide
for an example.
You could use a Valuation for:
• Pitch Books and Client Presentations – When you provide updates and
tell them what you think they’re worth.
• Parts of Other Models – Defense analyses, merger models, LBO models,
DCFs, and almost everything else in finance will incorporate a Valuation
in some way.
• Fairness Opinions – Right before a deal with a public seller closes, its
financial advisor creates a “Fairness Opinion” that justifies the acquisition
price and directly estimates the company’s valuation."""
BASIC@Valuation@"""Why would a company with similar growth and profitability to its
Comparable Companies be valued at a premium?"""@"""This could happen for a number of reasons:
• The company has just reported earnings well-above expectations and its
stock price has risen in response.
• It has some type of competitive advantage not reflected in its financials,
such as a key patent or other intellectual property.
• It has just won a favorable ruling in a major lawsuit.
• It is the market leader in an industry and has greater market share than its
competitors."""
BASIC@Valuation@"""How do you take into account a company’s competitive advantage in a
valuation?"""@"""1. Highlight the 75th percentile or higher for the multiples rather than
median.
2. Add in a premium to some of the multiples.
3. Use more aggressive projections for the company.
In practice you rarely do all of the above – these are just possibilities."""
BASIC@Valuation@"""Do you ALWAYS use the median multiple of a set of public company
comparables or precedent transactions?"""@"""Nope. In fact, you almost always show a range. And you may make the median
the center of that range, but you don’t have to – you could focus on the 75th
percentile, 25th percentile, or anything else if the company is outperforming or
underperforming for some reason."""
BASIC@Valuation@"""Two companies have the exact same financial profiles (revenue, growth, and
profits) and are purchased by the same acquirer, but the EBITDA multiple for
one transaction is twice the multiple of the other transaction – how could this
happen?"""@"""• One process was more competitive and had a lot more companies bidding
on the target.
• One company had recent bad news or a depressed stock price so it was
acquired at a discount.
• They were in industries with different median multiples.
• The two companies have different accounting standards and have added
back different items when calculating EBITDA, so the multiples are not
truly comparable."""
BASIC@Valuation@"""If you were buying a vending machine business, would you pay a higher
EBITDA multiple for a business that owned the machines and where they
depreciated normally, or one in which the machines were leased? The
Depreciation expense and the lease expense are the same dollar amounts and
everything else is held constant."""@"""You would pay a higher multiple for the one with leased machines if all else is
equal.
The Purchase Enterprise Value would be the same for both acquisitions, but
Depreciation is excluded from EBITDA – so EBITDA is higher, and the EV /
EBITDA multiple is lower for the one that owns its own machines.
For the company with leased machines, the lease expense would show up in
Operating Expenses, making EBITDA lower and the EV / EBITDA multiple
higher.
This goes back to one of the points we’ve made throughout this guide: in
isolation, specific valuation multiples don’t mean much. You need to see what
goes into the numbers and what standards are used.
In this case, it would be more meaningful to use an EBIT or EBITDAR multiple to
compare the two potential acquisitions."""
BASIC@Valuation@"""How would you value a company that has no profit and no revenue?"""@"""There are two options:
1. You could use Comparable Companies and Precedent Transactions and
look at more “creative” multiples such as EV / Unique Visitors and EV /
Pageviews (for Internet start-ups, for example) rather than EV / Revenue
or EV / EBITDA.
2. You could use a “far-in-the-future DCF” and project a company’s
financials out until it actually earns revenue and profit.
Method #1 is better for Internet start-ups and anything else that is truly
unpredictable; method #2 is more common for biotech and pharmaceutical
companies, where you can more predictably estimate the potential market size
and prices for new drugs."""
BASIC@Valuation@"""The S&P 500 Index (or equivalent index in other country) has a median P / E
multiple of 20x. A manufacturing company you’re analyzing has earnings of $1
million. How much is the company worth?"""@"""It depends on how it’s performing relative to the index, and relative to
companies in its own industry. If it has higher growth and/or higher margins,
you may assign a higher multiple to it – maybe 25x or even 30x, and therefore
assume that its Equity Value equals $25 million or $30 million.
If it’s on par with everyone else, then maybe its valuation is just $20 million.
And if it’s underperforming, perhaps it’s lower than that.
Qualitative factors, such as management team and market position, also come
into play and may determine the appropriate multiple to use."""
BASIC@Valuation@"""A company’s current stock price is $20.00 per share, and its P / E multiple is
20x, so its EPS is $1.00. It has 10 million shares outstanding.
Now it does a 2-for-1 stock split – how do its P / E multiple and valuation
change?"""@"""They don’t. Think about what happens: the company now has 20 million shares
outstanding… but its Equity Value has stayed the same, so its share price falls to
$10.00.
Its EPS falls to $0.50, but its share price has also fallen to $10.00, so the P / E
multiple remains 20x.
Splitting stock into fewer units or additional units doesn’t, by itself, make a
company worth more or less.
However, in practice, often a stock split is viewed as a positive sign by the
market… so in many cases a company’s value will go up and its share price
won’t necessarily be cut in half, so P / E could increase."""
BASIC@Valuation@"""Let’s say that you’re comparing a company with a strong brand name, such
as Coca-Cola, to a generic manufacturing or transportation company.
Both companies have similar growth profiles and margins. Which one will
have the higher EV / EBITDA multiple?"""@"""In all likelihood, Coca-Cola will have the higher multiple due to its strong brand
name.
Remember that valuation is not a science – it’s an art, and the market often
behaves in irrational ways. Values are not based strictly on financial criteria, and
other factors such as brand name, perceived “trendiness,” and so on all make a
huge impact."""
ADVANCED@Valuation@"""Walk me through an M&A premiums analysis."""@"""The purpose of this analysis is to look at similar transactions and calculate the
premiums that buyers have paid over public sellers’ share prices when acquiring
them. For example, if a company is trading at $10.00/share and the buyer
acquires it for $15.00/share, that’s a 50% premium.
1. First, select the precedent transactions based on industry, date (the past 2-
3 years, for example), and size (ex: over $1 billion market cap).
2. For each transaction, get the seller’s share price 1 day, 20 days, and 60
days before the transaction was announced (you can also look at 90-day
intervals, or 30 days, 45 days, etc.).
3. Then, calculate the 1-day premium, 20-day premium, etc. by dividing the
per-share purchase price by the appropriate share price on each day.
4. Get the medians for each set, and then apply them to your company’s
current share price, share price 20 days ago, and so on to estimate how
much of a premium a buyer might pay for it.
You only use this analysis when valuing a public company because private
companies don’t have share prices. Sometimes the set of companies here is
exactly the same as your set of precedent transactions, but typically it is broader."""
ADVANCED@Valuation@"""Both M&A premiums and precedent transactions involve analyzing
previous M&A transactions. What’s the difference in how we select them?"""@"""• All the sellers in the M&A premiums analysis must be public.
• Usually we use a broader set of transactions for M&A premiums – we
might use fewer than 10 precedent transactions but we might have dozens
of M&A premiums. The industry and financial screens are usually less
stringent.
• Aside from those, the screening criteria are similar – financial metrics,
industry, geography, and date."""
ADVANCED@Valuation@"""Walk me through a future share price analysis."""@"""The purpose of this analysis is to project what a company’s share price might be
1 or 2 years from now and then discount it back to its present value.
1. Get the median historical (usually Trailing Twelve Months, or TTM) P / E
multiple of the public company comparables.
2. Apply this P / E multiple to your company’s 1-year forward or 2-year
forward projected EPS to get its implied future share price.
3. Then, discount this share price back to its present value by using a
discount rate in-line with the company’s Cost of Equity.
You normally look at a range of P / E multiples as well as a range of discount
rates for this type of analysis, and then create sensitivity tables with these as
inputs. Technically, you could also use other multiples but P / E is the most
common one here."""
ADVANCED@Valuation@"""Walk me through a Sum-of-the-Parts analysis."""@"""In a Sum-of-the-Parts analysis, you value each division of a company using
separate comparables and transactions, get to separate multiples, and then add
up each division’s value to get the total for the company (example from our
modeling courses shown below):
Once again, picking a range of multiples and values is crucial and you would
never just say, “The exact multiple to use for Search Advertising is 6.5x!”"""
ADVANCED@Valuation@"""How do you value Net Operating Losses (NOLs) and take them into account
in a valuation?"""@"""You determine how much the NOLs will save the company in taxes in future
years, and then calculate the net present value of the total future tax savings.
There are two ways to estimate the tax savings in future years:
1. Assume that a company can use its NOLs to completely offset its taxable
income until the NOLs run out.
2. In an acquisition scenario, use Section 382 and multiply the highest
adjusted long-term rate (http://pmstax.com/afr/exemptAFR.shtml) of the
past 3 months by the Equity Purchase Price of the seller to determine the
maximum allowed NOL usage in each year – and then use that to
determine how much the company can save in taxes.
You might look at NOLs in a valuation but you rarely factor them in – if you did,
they would be treated similarly to Cash and you would subtract NOLs to go
from Equity Value to Enterprise Value, and vice versa (see the Equity Value and
Enterprise Value section of the guide)."""
ADVANCED@Valuation@"""What’s the purpose of “calendarization”? How do you use it in a valuation?"""@"""You “calendarize” because different companies have different fiscal years. For
example, some companies’ fiscal years may run from January 1 to December 31 –
but others may have fiscals year that run from April 1 to March 31, or from July 1
to June 30.
This creates a problem because you can’t directly compare all these periods – you
always need to look at the same calendar period when you create a set of Public
Comps.
So you adjust all the fiscal years by adding and subtracting “partial” periods.
You almost always adjust other companies’ fiscal years to match the company
you’re valuing.
Let’s say that you need to adjust a July 1 – June 30 fiscal year to make it end on
December 31 instead.
In this scenario, you’d take the July 1 – June 30 period, add the financials from
the June 30 – December 31 period this year, and then subtract the financials from
the June 30 – December 31 period the previous year.
Here’s a set of diagrams to illustrate the process:
'See Page 48, Valuation book'
Now you can see that we’re left with the January 1 – December 31 period, rather
than July 1 – June 30."""
ADVANCED@Valuation@"""Does calendarization apply to both Public Comps and Precedent
Transactions?"""@"""It applies mostly to Public Comps because there’s a high chance that fiscal years
will end on different dates with a big enough set of companies.
However, in effect you do calendarize for Precedent Transactions as well because
you normally look at the Trailing Twelve Months (TTM) period for each deal.
So if an acquisition was announced on April 30 and the company’s fiscal year
ends on December 31, you will calendarize the revenue, EBITDA, and so on by
adding the January 1 – March 31 period of the current year and subtracting the
January 1 – March 31 period of the previous year."""
ADVANCED@Valuation@"""I’m looking at financial data for a public company comparable, and it’s
April (Q2) right now. Walk me through how you would “calendarize” this
company’s financial statements to show the Trailing Twelve Months as
opposed to just the last Fiscal Year."""@"""The formula to calendarize financial statements is as follows:
TTM = Most Recent Fiscal Year + New Partial Period – Old Partial Period
So in the example above, we would take the company’s Q1 (January 1 – March 31
of this year ) numbers, add the most recent fiscal year’s (January 1 – December 31
of last year) numbers, and then subtract the previous year’s Q1 numbers (January
1 – March 31 of last year).
For US-based companies you can find these quarterly numbers in the 10-Q; for
international companies they’re in the interim reports."""
ADVANCED@Valuation@"""Let’s say that you’re looking at a set of Public Comps with fiscal years
ending on March 31, June 30, and December 31. The company you’re analyzing
has a fiscal year that ends on June 30. How would you calendarize the
financials for these companies?"""@"""You generally calendarize based on the fiscal year of the company you’re valuing.
So in this case you would adjust and make the other companies’ fiscal years end
on June 30.
For the one with the March 31 year, you would take that year and then add the
March 31 – June 30 period, and subtract the March 31 – June 30 period from the
previous year.
For the one with the December 31 year, you would take that year and add the
January 1 – June 30 period, and subtract the January 1 – June 30 period from the
previous year."""
ADVANCED@Valuation@"""You’re analyzing the financial statements of a Public Comp, and you see
Income Statement line items for Restructuring Expenses and an Asset Disposal.
Should you add these back when calculating EBITDA?"""@"""This is a trick question on multiple levels:
1. First, you should always take these charges from the Cash Flow Statement
if possible – sometimes the charges are partially embedded within other
line items on the Income Statement. If they don’t appear on the Cash Flow
Statement, look up them in the Notes to the Financial Statements.
2. Second, you only add them back if they’re truly non-recurring charges. If
a company claims it has been “restructuring” for the past 5 years, well,
that’s not exactly a non-recurring expense.
There’s a lot of subtlety when adjusting for these types of charges and there is
not necessarily a “correct” way to do it in all cases."""
ADVANCED@Valuation@"""How do non-recurring charges typically affect valuation multiples?"""@"""Most of the time, these charges effectively increase valuation multiples because
they reduce metrics such as EBIT, EBITDA, and EPS. You could have non-
recurring income as well (e.g. a one-time asset sale) which would have the
opposite effect.
So be aware that it works both ways, and be ready to adjust for both non-
recurring expenses and non-recurring income sources."""
ADVANCED@Valuation@"""We’re valuing a company’s 30% interest in another company – in other
words, an Investment in Equity Interest or Associate Company.
We could just multiply 30% by that company’s value, but what other
adjustments might we make?"""@"""Normally, you’ll apply some type of “Liquidity Discount” or “Lack of Control
Discount” and assume that the stake is worth 20-30% (or more) less than the
book value because the company you’re valuing doesn’t truly control this other
company.
Additionally, you may value these types of investments by assuming that they
get sold off – so you would apply the company’s tax rate as well and calculate
the after-tax proceeds, after any discounts have been applied."""
ADVANCED@Valuation@"""I have a set of public company comparables and need to get the projections
from equity research. How do I select which report to use?"""@"""This varies by bank and group, but here are two common methods:
1. You pick the report with the most detailed information.
2. You pick the report with numbers in the middle of the range.
Note that you do not pick reports based on which bank they’re coming from. So
if you’re at Goldman Sachs, you would not pick all Goldman Sachs equity
research – that would actually be bad because then the valuation would be less
objective."""
ADVANCED@Valuation@"""I have a set of precedent transactions but I’m missing information like
EBITDA for a lot of the companies, since they were private. How can I find it
if it’s not available via public sources?"""@"""1. Search online and see if you can find press releases or articles in the
financial press with these numbers.
2. Failing that, look in equity research for the buyer around the time of the
transaction and see if any of the analysts estimate the seller’s numbers.
3. Also look at online sources like Capital IQ and Factset an"""
ADVANCED@Valuation@"""You’re analyzing a set of transactions where the buyers have acquired
everything from 20% to 80% to 100% of other companies.
Should you use all of them as part of your valuation?"""@"""Ideally, no. It is best to limit the set to just 100% acquisitions, or at least > 50%
acquisitions, because the dynamics are very different when you acquire an entire
company or a majority of a company compared to when you acquire only a 20%
or 30% stake.
You may not always be able to do this due to lack of data or lack of transactions,
but generally transactions get less and less comparable as the percentage
acquired varies by more and more."""
ADVANCED@Valuation@"""You’re analyzing a transaction where the buyer acquired 80% of the seller
for $500 million. The seller’s revenue was $300 million and its EBITDA was
$100 million. It also had $50 million in cash and $100 million in debt.
What were the revenue and EBITDA multiples for this deal?"""@"""First, calculate the Equity Value: $500 million / 80% = $625 million. That
represents the value of 100% of the seller.
Then, calculate Enterprise Value: $625 million – $50 million + $100 million = $675
million.
The revenue multiple is $675 million / $300 million, or 2.3x, and the EBITDA
multiple is $675 million / $100 million, or 6.8x."""
ADVANCED@Valuation@"""How far back and forward do we usually go for public company
comparable and precedent transaction multiples?"""@"""Usually you look at the TTM (Trailing Twelve Months) period for both sets, and
then you look forward either 1 or 2 years.
You’re more likely to look backward more than 1 year and go forward more than
2 years for public company comparables; for precedent transactions it’s odd to go
forward more than 1 year because the information is more limited."""
ADVANCED@Valuation@"""I have one company with a 40% EBITDA margin trading at 8x EBITDA, and
another company with a 10% EBITDA margin trading at 16x EBITDA. What’s
the problem with comparing these two valuations directly?"""@"""There’s no “rule” that says this is not allowed, but it can be misleading to
compare companies with dramatically different margins. Due to basic arithmetic,
the 40% margin company will usually have a lower multiple – whether or not its
actual value is lower. See the diagram below:
In this situation, we might consider screening based on margins and remove the
outliers – you would not try to “normalize” the EBITDA multiples based on
margins."""
ADVANCED@Valuation@"""How do you value a private company?"@"""You use the same methodologies as with public companies: public company
comparables, precedent transactions, and DCF. But there are some differences:
• You might apply a 10-15% (or more) discount to the public company
comparable multiples because the private company you’re valuing is not
“liquid” like the public comps are.
• You can’t use a premiums analysis or future share price analysis because
a private company doesn’t have a share price.
• Your valuation shows the Enterprise Value for the company as opposed
to the implied per-share price as with public companies. You can still
calculate Equity Value, but a “per-share price” is meaningless for a private
company.
• A DCF gets tricky because a private company doesn’t have a market
capitalization or Beta – you would probably estimate WACC based on the
public comps’ WACC rather than trying to calculate it yourself."""
ADVANCED@Valuation@"""Let’s say we’re valuing a private company. Why might we discount the
public company comparable multiples but not the precedent transaction
multiples?"""@"""There’s no discount because with precedent transactions, you’re acquiring the
entire company – and once it’s acquired, the shares immediately become illiquid.
But shares – the ability to buy individual “pieces” of a company rather than the
whole thing – can be either liquid (if it’s public) or illiquid (if it’s private).
Since shares of public companies are always more liquid, you would discount
public company comparable multiples to account for this."""
ADVANCED@Valuation@"""Can you use private companies as part of your valuation?"""@"""Only in the context of precedent transactions – it would make no sense to include
them for public company comparables or as part of the Cost of Equity or WACC
calculation in a DCF because they are not public and therefore have no values for
market cap or Beta."""
ADVANCED@Valuation@"""Walk me through an IPO valuation for a company that’s about to go public."""@"""1. Unlike normal valuations, in an IPO valuation we only care about public
company comparables – we select them as we normally would.
2. After picking the public company comparables, we decide on the most
relevant multiple(s) to use and then estimate our company’s Enterprise
Value based on that (or Equity Value depending on the multiple).
3. Once we have the Enterprise Value, we work backwards to calculate
Equity Value. We also have to account for the IPO proceeds in here, i.e. by
adding them since we’re working backwards (these proceeds are what the
company receives in cash from the IPO).
4. Then we divide by the total number of shares (old and newly created) to
get its per-share price. When people say “An IPO priced at…” this is what
they’re referring to.
If you were using P / E or any other “Equity Value-based multiple” in step #2
here, then you could skip step #3 and just take into account the cash proceeds."""
ADVANCED@Valuation@"""How do you value banks and financial institutions differently from other
companies?"""@"""For relative valuation, the methodologies (public comps and precedent
transactions) are the same but the metrics and multiples are different:
• The financial criteria consist of Assets, Loans, or Deposits rather than
revenue or EBITDA.
• You look at metrics like ROE (Return on Equity = Net Income /
Shareholders’ Equity), ROA (Return on Assets = Net Income / Total
Assets), and Book Value and Tangible Book Value rather than Revenue,
EBITDA, and so on.
• You use multiples such as P / E, P / BV, and P / TBV rather than EV /
EBITDA.
Rather than a traditional DCF, you use 2 different methodologies for intrinsic
valuation:
• In a Dividend Discount Model (DDM) you sum up the present value of a
bank’s dividends in future years and then add it to the present value of
the bank’s terminal value, usually basing that on a P / BV or P / TBV
multiple.
• In a Residual Income Model (also known as an Excess Returns Model),
you take the bank’s current Book Value and simply add the present value
of the excess returns to that Book Value to value it. The “excess return”
each year is (ROE * Book Value) – (Cost of Equity * Book Value) – basically
by how much the returns exceed your expectations.
You need to use these methodologies and multiples because Interest is a critical
component of a bank’s revenue and because Debt is a “raw material” rather than
just a financing source; also, banks’ Book Values are usually very close to their
Market Caps.
See the industry-specific guides for more detail here."""
ADVANCED@Valuation@"""Walk me through how we might value an oil & gas company and how it’s
different from a “standard” company."""@"""Public comps and precedent transactions are similar, but:
• You might screen based on metrics like Proved Reserves or Daily
Production.
• You would look at the above metrics as well as R/P (Proved Reserves /
Last Year’s Production), EBITDAX, and other industry-specific ones, and
use matching multiples.
You could use a standard Unlevered DCF to value an oil & gas company as well,
but it’s more common to see a NAV (Net Asset Value) Model where you take
the company’s Proved Reserves, assume they produce revenue until depletion,
assign a cost to the production in each year, and take the present value of those
cash flows to value the company.
There are also a host of other complications: oil & gas companies are cyclical and
have no control over the prices they receive, companies use either “full-cost
accounting” or “successful efforts accounting” and treat the exploration expense
differently according to that, and so on.
See the industry-specific guides for more detail here."""
ADVANCED@Valuation@"""Walk me through how you would value a REIT (Real Estate Investment
Trust) and how it differs from a “normal” company."""@"""Similar to energy, real estate is asset-intensive and a company’s value depends
on how much cash flow specific properties generate.
• You look at Price / FFO per Share (Funds from Operations) and Price /
AFFO per Share (Adjusted Funds from Operations), which add back
Depreciation and subtract Gains (and add Losses) on property sales.
• A Net Asset Value (NAV) model is the most common intrinsic valuation
methodology; you assign a Cap Rate to the company’s projected NOI and
multiply to get the value of its real estate, adjust and add its other assets,
subtract liabilities and divide by its share count to get NAV per Share, and
then compare that to its current share price.
• You value properties by dividing Net Operating Income (NOI)
(Property’s Gross Income – Property-Level Operating Expenses and
Property Taxes) by the capitalization rate (based on market data).
• Replacement Valuation is more common because you can actually
estimate the cost of buying new land and building new properties.
• A DCF is still a DCF, but it flows from specific properties instead and it
tends to be far less common than the NAV model.
See the industry-specific guides for more detail here."""
BASIC@DCF@"""What’s the basic concept behind a Discounted Cash Flow analysis?"""@"""The concept is that you value a company based on the present value of its Free
Cash Flows far into the future.
You divide the future into a “near future” period of 5-10 years and then calculate,
project, discount, and add up those Free Cash Flows; and then there’s also a “far
future” period for everything beyond that, which you can’t estimate as precisely,
but which you can approximate using different approaches.
You need to discount everything back to its present value because money today
is worth more than money tomorrow."""
BASIC@DCF@"""Walk me through a DCF."""@"""“A DCF values a company based on the Present Value of its Cash Flows and the
Present Value of its Terminal Value.
First, you project a company’s financials using assumptions for revenue growth,
margins, and the Change in Operating Assets and Liabilities; then you calculate
Free Cash Flow for each year, which you discount and sum up to get to the Net
Present Value. The Discount Rate is usually the Weighted Average Cost of
Capital.
Once you have the present value of the Free Cash Flows, you determine the
company’s Terminal Value, using either the Multiples Method or the Gordon
Growth Method, and then you discount that back to its Net Present Value using
the Discount Rate.
Finally, you add the two together to determine the company’s Enterprise Value.”"""
BASIC@DCF@"""Walk me through how you get from Revenue to Free Cash Flow in the
projections."""@"""First, confirm that they are asking for Unlevered Free Cash Flow (Free Cash Flow
to Firm). If so:
Subtract COGS and Operating Expenses from Revenue to get to Operating
Income (EBIT) – or just use the EBIT margin you’ve assumed.
Then, multiply by (1 – Tax Rate), add back Depreciation, Amortization, and other
non-cash charges, and factor in the Change in Operating Assets and Liabilities. If
Assets increase by more than Liabilities, this is a negative; otherwise it’s positive.
Finally, subtract Capital Expenditures to calculate Unlevered Free Cash Flow.
Levered Free Cash Flow (FCFE) is similar, but you must also subtract the Net
Interest Expense before multiplying by (1 – Tax Rate), and you must also subtract
Mandatory Debt Repayments at the end."""
BASIC@DCF@"""What’s the point of Free Cash Flow, anyway? What are you trying to do?"""@"""The idea is that you’re replicating the Cash Flow Statement, but only including
recurring, predictable items. And in the case of Unlevered Free Cash Flow, you
also exclude the impact of Debt entirely.
That’s why everything in Cash Flow from Investing except for CapEx is excluded,
and why the entire Cash Flow from Financing section is excluded (the only
exception being Mandatory Debt Repayments for Levered FCF)."""
BASIC@DCF@"""Why do you use 5 or 10 years for the “near future” DCF projections?"""@"""That’s about as far as you can reasonably predict for most companies. Less than 5
years would be too short to be useful, and more than 10 years is too difficult to
project for most companies."""
BASIC@DCF@"""Is there a valid reason why we might sometimes project 10 years or more
anyway?"""@"""You might sometimes do this if it’s a cyclical industry, such as chemicals,
because it may be important to show the entire cycle from low to high."""
BASIC@DCF@"""What do you usually use for the Discount Rate?"""@"""In a Unlevered DCF analysis, you use WACC (Weighted Average Cost of
Capital), which reflects the “Cost” of Equity, Debt, and Preferred Stock. In a
Levered DCF analysis, you use Cost of Equity instead."""
BASIC@DCF@""" If I’m working with a public company in a DCF, how do I move from
Enterprise Value to its Implied per Share Value?"""@"""Once you get to Enterprise Value, ADD Cash and then SUBTRACT Debt,
Preferred Stock, and Noncontrolling Interests (and any other debt-like items) to
get to Equity Value.
Then you divide by the company’s share count (factoring in all dilutive securities)
to determine the implied per-share price."""
BASIC@DCF@"""Let’s say we do this and find that the Implied per Share Value is $10.00. The
company’s current share price is $5.00. What does this mean?"""@"""By itself, this does not mean much – you have to look at a range of outputs from
a DCF rather than just a single number. So you would see what the Implied per
Share Value is under different assumptions for the Discount Rate, revenue
growth, margins, and so on.
If you consistently find that it’s greater than the company’s current share price,
then the analysis might tell you that the company is undervalued; it might be
overvalued if it’s consistently less than the current share price across all ranges."""
BASIC@DCF@"""An alternative to the DCF is the Dividend Discount Model (DDM). How is
it different in the general case (i.e. for a normal company, not a commercial
bank or insurance firm?)"""@"""The setup is similar: you still project revenue and expenses over a 5-10 year
period, and you still calculate Terminal Value.
The difference is that you do not calculate Free Cash Flow – instead, you stop at
Net Income and assume that Dividends Issued are a percentage of Net Income,
and then you discount those Dividends back to their present value using the Cost
of Equity.
Then, you add those up and add them to the present value of the Terminal Value,
which you might base on a P / E multiple instead.
Finally, a Dividend Discount Model gets you the company’s Equity Value rather
than its Enterprise Value since you’re using metrics that include interest income
and expense."""
BASIC@DCF@"""Let’s talk more about how you calculate Free Cash Flow. Is it always correct
to leave out most of the Cash Flow from Investing section and all of the Cash
Flow from Financing section?"""@"""Most of the time, yes, because all items other than CapEx are generally non-
recurring, or at least do not recur in a predictable way.
If you have advance knowledge that a company is going to sell or buy a certain
amount of securities, issue a certain amount of stock, or repurchase a certain
number of shares every year, then sure, you can factor those in. But it’s extremely
rare to do that."""
BASIC@DCF@"""Why do you add back non-cash charges when calculating Free Cash Flow?"""@"""For the same reason you add them back on the Cash Flow Statement: you want
to reflect the fact that they save the company on taxes, but that the company does
not actually pay the expense in cash."""
BASIC@DCF@"""What’s an alternate method for calculating Unlevered Free Cash Flow (Free
Cash Flow to Firm)?"""@"""There are many “alternate methods” – here are a few common ones:
• EBIT * (1 – Tax Rate) + Non-Cash Charges – Changes in Operating Assets
and Liabilities – CapEx
• Cash Flow from Operations + Tax-Adjusted Net Interest Expense – CapEx
• Net Income + Tax-Adjusted Net Interest Expense + Non-Cash Charges –
Changes in Operating Assets and Liabilities – CapEx
The difference with these is that the tax numbers will be slightly different as a
result of when you exclude the interest."""
BASIC@DCF@"""What about alternate ways to calculate Levered Free Cash Flow?"""@"""• Net Income + Non-Cash Charges – Changes in Operating Assets and
Liabilities – CapEx – Mandatory Debt Repayments
• (EBIT – Net Interest Expense) * (1 – Tax Rate) + Non-Cash Charges –
Changes in Operating Assets and Liabilities – CapEx – Mandatory Debt
Repayments
• Cash Flow from Operations – CapEx – Mandatory Debt Repayments"""
BASIC@DCF@"""As an approximation, do you think it’s OK to use EBITDA – Changes in
Operating Assets and Liabilities – CapEx to approximate Unlevered Free Cash
Flow?"""@"""This is inaccurate because it excludes taxes completely. It would be better to use
EBITDA – Taxes – Changes in Operating Assets and Liabilities – CapEx.
If you need a very quick approximation, yes, this formula can work and it will
get you closer than EBITDA by itself. But taxes are significant and should not be
overlooked."""
BASIC@DCF@"""What’s the point of that “Changes in Operating Assets and Liabilities”
section? What does it mean?"""@"""All it means is that if Assets are increasing by more than Liabilities, the company
is spending cash and therefore reducing its cash flow, whereas if Liabilities are
increasing by more than Assets, the company is increasing its cash flow.
For example, if it places a huge order of Inventory, sells products, and records
revenue, but hasn’t receive the cash from customers yet, Inventory and Accounts
Receivable both go up and represent uses of cash.
Maybe some of its Liabilities, such as Accounts Payable and Deferred Revenue,
also increase… but think about what happens: if the Assets increase by, say, $100,
and the Liabilities only increase by $50, it’s a net cash flow reduction of $50.
So that is what this section is for – we need to take into account the cash changes
from these operationally-linked Balance Sheet items."""
BASIC@DCF@"""What happens in the DCF if Free Cash Flow is negative? What if EBIT is
negative?"""@"""Nothing “happens” because you can still run the analysis as-is. The company’s
value will certainly decrease if one or both of these turn negative, because the
present value of Free Cash Flow will decrease as a result.
The analysis is not necessarily invalid even if cash flow is negative – if it turns
positive after a point, it could still work.
If the company never turns cash flow-positive, then you may want to skip the
DCF because it will always produce negative values."""
BASIC@DCF@"""Let’s say that you use Levered Free Cash Flow rather than Unlevered Free
Cash Flow in your DCF – what changes?"""@"""Levered Free Cash Flow gives you Equity Value rather than Enterprise Value,
since the cash flow is only available to Equity Investors (Debt investors have
already been “paid” with the interest payments and principal repayments)."""
BASIC@DCF@"""If you use Levered Free Cash Flow, what should you use as the Discount
Rate?"""@"""You would use Cost of Equity rather than WACC since we’re ignoring Debt and
Preferred Stock and only care about the Equity Value for Levered FCF."""
BASIC@DCF@"""Let’s say that you use Unlevered Free Cash Flow in a DCF to calculate
Enterprise Value. Then, you work backwards and use the company’s Cash,
Debt, and so on to calculate its implied Equity Value.
Then you run the analysis using Levered Free Cash Flow instead and calculate
Equity Value at the end. Will the implied Equity Value from both these
analyses by the same?"""@"""No, most likely it will not be the same. In theory, you could pick equivalent
assumptions and set up the analysis such that you calculate the same Equity
Value at the end.
In practice, it’s difficult to pick “equivalent” assumptions, so these two methods
will rarely, if ever, produce the same value.
Think about it like this: when you use Unlevered FCF and move from Enterprise
Value to Equity Value, you’re always using the same numbers for Cash, Debt, etc.
But in a Levered FCF analysis, the terms of the Debt will impact Free Cash
Flow – so simply by assuming a different interest rate or repayment schedule,
you’ll alter the Equity Value. That’s why it’s so difficult to make “equivalent
assumptions.”"""
BASIC@DCF@"""How do you calculate WACC?"""@"""• WACC = Cost of Equity * (% Equity) + Cost of Debt * (% Debt) * (1 – Tax
Rate) + Cost of Preferred * (% Preferred)
In all cases, the percentages refer to how much each component comprises of the
company’s capital structure.
For Cost of Equity, you can use the Capital Asset Pricing Model (CAPM – see the
next question) and for the others you usually look at comparable companies and
comparable debt issuances and the interest rates and yields issued by similar
companies to get estimates."""
BASIC@DCF@"""How do you calculate Cost of Equity?"""@"""• Cost of Equity = Risk-Free Rate + Equity Risk Premium * Levered Beta
The Risk-Free Rate represents how much a 10-year or 20-year US Treasury (or
equivalent “safe” government bond in your own country) should yield; Beta is
calculated based on the “riskiness” of Comparable Companies and the Equity
Risk Premium is the percentage by which stocks are expected to out-perform
“risk-less” assets like US Treasuries.
Normally you pull the Equity Risk Premium from a publication called Ibbotson’s.
Note: Depending on your bank and group, you might also add in a “size
premium” and “industry premium” to account for additional risk and expected
returns from either of those.
Small-cap stocks are expected to out-perform large-cap stocks and certain
industries are expected to out-perform others, and these premiums reflect these
expectations."""
BASIC@DCF@"""Cost of Equity tells us the return that an equity investor might expect for
investing in a given company – but what about dividends? Shouldn’t we factor
dividend yield into the formula?"""@"""Trick question. Dividend yields are already factored into Beta, because Beta
describes returns in excess of the market as a whole – and those returns include
Dividends."""
BASIC@DCF@"""How can we calculate Cost of Equity WITHOUT using CAPM?"""@"""There is an alternate formula:
• Cost of Equity = (Dividends per Share / Share Price) + Growth Rate of
Dividends
This is less common than the “standard” formula but sometimes you use it when
the company is guaranteed to issue Dividends (e.g. Utilities companies) and/or
information on Beta is unreliable."""
BASIC@DCF@"""How do you calculate Beta in the Cost of Equity calculation?"""@"""First off, note that you don’t have to calculate anything – you could just take the
company’s Historical Beta, based on its stock performance vs. the relevant index.
Normally, however, you come up with a new estimate for Beta based on the set of
Public Comps you’re using to value the company elsewhere in the Valuation,
under the assumption that your estimate will be more accurate.
You look up the Beta for each Comparable Company (usually on Bloomberg),
un-lever each one, take the median of the set and then lever that median based
on the company’s capital structure. Then you use this Levered Beta in the Cost of
Equity calculation.
The formulas for un-levering and re-levering Beta are below (see the Rules
section above for explanations).
• Unlevered Beta = Levered Beta / (1 + ((1 - Tax Rate) x (Total Debt/Equity)))
• Levered Beta = Unlevered Beta x (1 + ((1 - Tax Rate) x (Total Debt/Equity)))"""
BASIC@DCF@"""Why do you have to un-lever and re-lever Beta when you calculate it based
on the comps?"""@"""When you look up the Betas on Bloomberg (or whatever source you’re using)
they will already be levered because a company’s previous stock price
movements reflect the Debt they’ve taken on.
But each company’s capital structure is different and we want to look at how
“risky” a company is regardless of what % debt or equity it has.
To do that, we need to un-lever Beta each time. We want to find the inherent
business risk that each company has, separate from the risk created by Debt.
But at the end of the calculation, we need to re-lever the median Unlevered Beta
of that set because we want the Beta used in the Cost of Equity calculation to
reflect the total risk of our company, taking into account its capital structure
this time as well."""
BASIC@DCF@"""Wait a second, would you still use Levered Beta with Unlevered Free Cash
Flow? What’s the deal with that?"""@"""They are different concepts (yes, the names get very confusing here). You always
use Levered Beta with Cost of Equity because Debt makes the company’s stock
riskier for everyone involved.
And you always use that same Cost of Equity number for both Levered Free
Cash Flow, where Cost of Equity itself is the Discount Rate, and also for
Unlevered Free Cash Flow, where Cost of Equity is a component of the Discount
Rate (WACC)."""
BASIC@DCF@"""How do you treat Preferred Stock in the formulas above for Beta?"""@"""It should be counted as Equity there because Preferred Dividends are not tax-
deductible, unlike interest paid on Debt."""
BASIC@DCF@"""Can Beta ever be negative? What would that mean?"""@"""Theoretically, yes, Beta could be negative for certain assets. If Beta is -1, for
example, that would mean that the asset moves in the opposite direction from
the market as a whole. If the market goes up by 10%, this asset would go down
by 10%.
In practice, you rarely, if ever, see negative Betas with real companies. Even
something labeled as “counter-cyclical” still follows the market as a whole; a
“counter-cyclical” company might have a Beta of 0.5 or 0.7, but not -1."""
BASIC@DCF@"""Would you expect a manufacturing company or a technology company to
have a higher Beta?"""@"""A technology company, because technology is viewed as a “riskier” industry
than manufacturing."""
BASIC@DCF@"""Shouldn’t you use a company’s targeted capital structure rather than its
current capital structure when calculating Beta and the Discount Rate?"""@"""In theory, yes. If you know that a company’s capital structure is definitely
changing in a certain, predictable way in the future, sure, go ahead and use that.
In practice, you rarely know this information in advance, so it’s not terribly
practical to make this kind of assumption."""
BASIC@DCF@"""The “cost” of Debt and Preferred Stock make intuitive sense because the
company is paying for interest or for the Preferred Dividends. But what about
the Cost of Equity? What is the company really paying?"""@"""The company “pays” for Equity in two ways:
1. It may issue Dividends to its common shareholders, which is a cash
expense.
2. It gives up stock appreciation rights to other investors, so in effect it’s
losing some of that upside – a non-cash but very real “cost.”
It is tricky to estimate the impact of both of those, which is why we usually use
the Risk-Free Rate + Equity Risk Premium * Beta formula to estimate the
company’s expected return instead."""
BASIC@DCF@"""If a firm is losing money, do you still multiply the Cost of Debt by (1 – Tax
Rate) in the WACC formula? How can a tax shield exist if they’re not even
paying taxes?"""@"""This is a good point, but in practice you will still multiply by (1 – Tax Rate)
anyway. What matters is not whether the Debt is currently reducing the
company’s taxes, but whether there’s potential for that to happen in the future."""
BASIC@DCF@"""How do you determine a firm’s Optimal Capital Structure? What does it
mean?"""@"""The “optimal capital structure” is the combination of Debt, Equity, and Preferred
Stock that minimizes WACC.
There is no real way to determine this formulaically because you’ll always find
that Debt should be 100% of a company’s capital structure since it’s always
cheaper than Equity and Preferred Stock… but that can’t happen because all
companies need some amount of Equity as well.
Plus, taking on additional Debt will impact the Cost of Equity and the Cost of
Preferred, so effectively it is a multivariable equation with no solution.
You may be able to approximate the optimal structure by looking at a few
different scenarios and seeing how WACC changes – but there’s no mathematical
solution."""
BASIC@DCF@"""Let’s take a look at companies during the financial crisis (or really, just any
type of crisis or economic downturn). Does WACC increase or decrease?"""@"""Break it down and think of the individual components of WACC: Cost of Equity,
Cost of Debt, Cost of Preferred, and the percentages for each one.
Then, think about the individual components of Cost of Equity: the Risk-Free
Rate, the Equity Risk Premium, and Beta.
• The Risk-Free Rate would decrease because governments worldwide
would drop interest rates to encourage spending.
• But then the Equity Risk Premium would also increase by a good amount
as investors demand higher returns before investing in stocks.
• Beta would also increase due to all the volatility.
• So overall, we can guess that the Cost of Equity would increase because
the latter two increases would likely more than make up for the decrease
in the Risk-Free Rate.
Now, for WACC:
• The Cost of Debt and Cost of Preferred Stock would both increase as it
would become more difficult for companies to borrow money.
• The Debt to Equity ratio would likely increase because companies’ share
prices would fall, meaning that Equity Value decreased for most
companies while Debt stayed the same…
• So proportionally, yes, Debt and Preferred would likely make up a higher
percentage of a company’s capital structure.
• But remember: the Cost of Debt and Cost of Preferred both increase, so
that shift doesn’t matter too much.
• As a result, WACC almost certainly increases because almost all these
variables push it up – the only one that pushes it down is the reduced
Risk-Free Rate.
There’s a simpler way to think about it as well: all else being equal, did
companies become more valuable or less valuable during the financial crisis?
Less valuable – because the market discounted their future cash flows at higher
rates. So WACC must have increased."""
BASIC@DCF@"""How do you calculate the Terminal Value?"""@"""You can either apply an exit multiple to the company’s Year 5 EBITDA, EBIT or
Free Cash Flow (Multiples Method) or you can use the Gordon Growth method
to estimate the value based on the company’s growth rate into perpetuity.
The formula for Terminal Value using the Gordon Growth method: Terminal
Value = Final Year Free Cash Flow * (1 + Growth Rate) / (Discount Rate – Growth
Rate).
Note that with either method, you’re estimating the same thing: the present
value of the company’s Free Cash Flows from the final year into infinity, as of
the final year."""
BASIC@DCF@"""Why would you use the Gordon Growth Method rather than the Multiples
Method to calculate the Terminal Value?"""@"""In banking, you almost always use the Multiples Method to calculate Terminal
Value in a DCF. It’s easier to get appropriate data for exit multiples since they are
based on Comparable Companies – picking a long-term growth rate involves
more guesswork.
However, you might use Gordon Growth if you have no good Comparable
Companies or if you believe that multiples will change significantly in the
industry several years down the road. For example, if an industry is cyclical (e.g.
chemicals or semiconductors) you might be better off using long-term growth
rates rather than exit multiples."""
BASIC@DCF@"""What’s an appropriate growth rate to use when calculating the Terminal
Value?"""@"""Normally you use the country’s long-term GDP growth rate, the rate of inflation,
or something similarly conservative.
For companies in developed countries, a long-term growth rate over 5% would
be quite aggressive since most developed economies are growing at less than 5%
per year."""
BASIC@DCF@"""How do you select the appropriate exit multiple when calculating Terminal
Value?"""@"""Normally you look at the Public Comps and pick the median of the set, or
something close to it.
You always show a range of exit multiples and what the Terminal Value looks
like over that range rather than picking one specific number.
So if the median EBITDA multiple of the set were 8x, you might show a range of
values using multiples ranging from 6x to 10x."""
BASIC@DCF@"""Which method of calculating Terminal Value will produce a higher
valuation?"""@"""It’s impossible to say because it could go either way depending on the
assumptions. There’s no general rule here that always applies, or that even
applies most of the time."""
BASIC@DCF@"""Can you explain the Gordon Growth formula in more detail? I don’t need a
full derivation, but what’s the intuition behind it?"""@"""We actually do have a full derivation if you look in the Key Rules section above.
Here’s the formula:
Terminal Value = Final Year Free Cash Flow * (1 + Growth Rate) / (Discount Rate
– Growth Rate).
And here’s the intuition behind it:
Let’s say that we know for certain that we’ll receive $100 every year indefinitely,
and we have a required return of 10%.
That means that we can “afford” to pay $1,000 now ($100 / 10%) to receive $100
in year 1 and $100 in every year after that forever.
But now let’s say that that stream of $100 were actually growing each year – if
that’s the case, then we could afford to invest more than the initial $1,000.
Let’s say that we expect the $100 to grow by 5% every year – how much can we
afford to pay now to capture all those future payments, if our required return is
10%?
Well, that growth increases our effective return… so now we can pay more and
still get that same 10% return.
We can estimate that by dividing the $100 by (10% – 5%). 10% is our required
return and 5% is the growth rate. So in this case, $100 / (10% – 5%) = $2,000.
This corresponds to the formula above: $100 represents Final Year Free Cash
Flow * (1 + Growth Rate), 10% is the Discount Rate, and 5% is the Growth Rate.
The higher the expected growth, the more we can afford to pay upfront. And if
the expected growth is the same as the required return, theoretically we can pay
an infinite amount (you get a divide by zero error in the equation) to achieve
that return.
You can test this yourself by plugging the values into a spreadsheet: enter $100,
make it grow by 5% each year, and then use NPV(10%, Area With All The
Numbers) and you’ll see how it approaches $2,000 as you add more to it:"""
BASIC@DCF@"""What’s the flaw with basing the Terminal Multiple on what the Public
Comps are trading at?"""@"""The median multiples may change greatly in the next 5-10 years, so they may no
longer be accurate by the end of the period you’re looking at. This is why you
look at a wide range of multiples and run sensitivity analyses to see how these
variables impact the valuation."""
BASIC@DCF@"""Wait a second: why isn’t the present value of the Terminal Value, by itself,
just the company’s Enterprise Value? Don’t you get Enterprise Value if you
apply a multiple to EBITDA?"""@"""Yes, you do get Enterprise Value – but that only represents the company’s “far in
the future” value. Remember that in a DCF, a company’s value is divided into
“near future” and “far future.”
If you leave out the present value of Free Cash Flows in the projection period,
you’re saying, “For the next 5 years, this company has no value. But then at the
end of year 5, the company is miraculously worth something again!” And that
doesn’t make sense."""
BASIC@DCF@"""How do you know if a DCF is too dependent on future assumptions?"""@"""Some people claim that if over 50% of a company’s value comes from the present
value of the Terminal Value, the DCF is too dependent on future assumptions.
The problem, though, is that in practice this is true in almost all DCFs. If the
present value of the Terminal Value accounts for something like 80-90%+ of the
company’s value, then maybe you need to re-think your assumptions."""
BASIC@DCF@"""How can you check whether your assumptions for Terminal Value using
the Multiples Method vs. the Gordon Growth Method make sense?"""@"""The most common method here is to calculate Terminal Value using one method,
and then to see what the implied long-term growth rate or implied multiple via
the other method would be.
Example: You calculate Terminal Value with a long-term growth rate
assumption of 4%. Terminal Value is $10,000. You divide that Terminal Value by
the final year EBITDA and get an implied EBITDA multiple of 15x – but the
Public Comps are only trading at a median of 8x EBITDA. In this case your
assumption is almost certainly too aggressive and you should reduce that long-
term growth rate."""
BASIC@DCF@"""You’re looking at two companies, both of which produce identical total Free
Cash Flows over a 5-year period. Company A generates 90% of its Free Cash
Flow in the first year and 10% over the remaining 4 years. Company B
generates the same amount of Free Cash Flow in each year.
Which one has the higher net present value?"""@"""Company A, because money today is worth more than money tomorrow. All
else being equal, generating higher cash flow earlier on will always boost a
company’s value in a DCF."""
BASIC@DCF@"""Should Cost of Equity be higher for a $5 billion or $500 million Market Cap
company?"""@"""It should be higher for the $500 million company, because all else being equal,
smaller companies are expected to outperform large companies in the stock
market (and are therefore “riskier”)."""
BASIC@DCF@"""What about WACC – will it be higher for a $5 billion or $500 million
company?"""@"""This is a bit of a trick question because it depends on whether or not the capital
structure is the same for both companies. If the capital structure is the same in
terms of percentages and interest rates, then WACC should be higher for the
$500 million company for the same reasons as mentioned above.
If the capital structure is not the same, then it could go either way depending on
how much debt/preferred stock each one has and what the interest rates are."""
BASIC@DCF@"""What’s the relationship between Debt and Cost of Equity?"""@"""More Debt means that the company is riskier, so the company’s Levered Beta
will be higher – so all else being equal, Cost of Equity would increase. Less Debt
would decrease Cost of Equity."""
BASIC@DCF@"""Two companies are exactly the same, but one has Debt and one does not –
which one will have the higher WACC?"""@"""The one without Debt will generally have a higher WACC because Debt is “less
expensive” than Equity. Why?
• Interest on Debt is tax-deductible – hence the (1 – Tax Rate) multiplication in
the WACC formula.
• Debt is senior to Equity in a company’s capital structure – debt investors
would be paid first in a liquidation or bankruptcy scenario.
• Intuitively, interest rates on Debt are usually lower than Cost of Equity
numbers (usually over 10%). As a result, the Cost of Debt portion of WACC
will contribute less to the total figure than the Cost of Equity portion."""
BASIC@DCF@"""Wait a minute, so are you saying that a company that does not take on Debt
is at a disadvantage to one that does? How does that make sense?"""@"""The one without Debt is not “at a disadvantage” – but it won’t be valued as
highly because of the way the WACC formula works.
Keep in mind that companies do not make big decisions based financial formulas.
If a company has no reason to take on Debt (e.g. it is very profitable and does not
need funds to expand its business), then it won’t take on Debt."""
BASIC@DCF@"""Let’s say that we assume 10% revenue growth and a 10% Discount Rate in a
DCF analysis. Which change will have a bigger impact: reducing revenue
growth to 9%, or reducing the Discount Rate to 9%?"""@"""The Discount Rate change will almost certainly have a bigger impact because
that affects everything from the present value of Free Cash Flows to the present
value of Terminal Value – and even a 10% change makes a huge impact."""
BASIC@DCF@"""What about if we change revenue growth to 1%? Would that have a bigger
impact, or would changing the Discount Rate to 9% have a bigger impact?"""@"""In this case the change in revenue growth is likely to have a bigger impact
because you’ve changed it by 90% but you’ve only changed the Discount Rate by
10% – and that lower revenue growth will push down the present value of the
Terminal Value (EBITDA and the FCF growth rate will both be lower) as well as
the present value of the Free Cash Flows."""
BASIC@DCF@"""The Free Cash Flows in the projection period of a DCF analysis increase by
10% each year. How much will the company’s Enterprise Value increase by?"""@"""A percentage that’s less than 10%, for two reasons:
1. Remember that we discount all those Free Cash Flows – so even if they
increase by 10%, the present value change is less than 10%.
2. There’s still the Terminal Value and the present value of that. That has
not increased by 10%, so neither has the company’s total value.
You can’t give an exact number for the increase without knowing the rest of the
numbers (Discount Rate, Terminal Value, etc.) in the analysis."""
BASIC@DCF@"""Let’s say that we want to analyze all these factors in a DCF. What are the
most common sensitivity analyses to use?"""@"""Common sensitivities:
• Revenue Growth vs. Terminal Multiple
• EBITDA Margin vs. Terminal Multiple
• Terminal Multiple vs. Discount Rate
• Terminal Growth Rate vs. Discount Rate"""
BASIC@DCF@"""A company has a high Debt balance and is paying off a significant portion
of its Debt principal each year. How does that impact a DCF?"""@"""Trick question. You don’t account for this at all in an Unlevered DCF because
you ignore interest expense and debt principal repayments.
In a Levered DCF, you factor it in by reducing the interest expense each year as
the Debt goes down and also by reducing Free Cash Flow by the mandatory
repayments each year.
The exact impact – i.e. whether the implied Equity Value goes up or down –
depends on the interest rate and the principal repayment percentage each year;
however, in most cases the principal repayments far exceed the net interest
expense, so the Equity Value will most likely decrease because Levered FCF will
be lower each year."""
BASIC@DCF@"""So if you’re using Levered FCF to value a company, is the company better
off paying off Debt quickly or repaying the bare minimum required?"""@"""It’s always better to pay the bare minimum. Think about the math for a second:
interest rates on Debt rarely go above 10-15%... let’s just assume that they’re 10%,
and that the company has $1,000 in Debt.
Initially, it pays $100 in interest expense, and after taxes that’s only $60 ($100 * (1
– 40%)). So Levered Free Cash Flow is reduced by $60 each year assuming no
principal repayment.
What happens if the company decides to repay $200 of that Debt each year?
Levered Free Cash Flow is down by at least $200 each year, and the company still
pays interest, albeit lower interest, until the end of the period.
So the company is always better off, valuation-wise, waiting as long as possible
to repay Debt."""
ADVANCED@DCF@"""Explain why we use the mid-year convention in a DCF."""@"""You use it to represent the fact that a company’s cash flow does not arrive 100%
at the end of each year – instead, it comes in evenly throughout each year.
In a DCF without the mid-year convention, we would use discount period
numbers of 1 for the first year, 2 for the second year, 3 for the third year, and so
on.
With the mid-year convention, we would instead use 0.5 for the first year, 1.5 for
the second year, 2.5 for the third year, and so on.
The end result is that the mid-year convention produces higher values since the
discount periods are all lower."""
ADVANCED@DCF@"""What’s the point of a “stub period” in a DCF? Can you give an example?"""@"""You use a stub period when you’re valuing a company before or after the end of
its fiscal year and there are 1 or more quarters in between the current date and
the end of the fiscal year.
For example, it’s currently September 30th and the company’s fiscal year ends on
December 31st
.
In this case it wouldn’t be correct to assume that Free Cash Flow only starts on
January 1st of the next year – there are still 3 months between now and the end of
the year, the company still generates FCF in those 3 months, and you need to
account for it somewhere in your model.
So you would calculate FCF in that 3-month period, use 0.25 for the discount
period, and then use 1.25 for the discount period for the first full year of the
model, 2.25 for the next year, and so on."""
ADVANCED@DCF@"""What discount period numbers would you use for the mid-year convention
if you had a stub period – e.g. Q4 of Year 1 – in a DCF?"""@"""The rule is that you divide the stub discount period by 2, and then you simply
subtract 0.5 from the “normal” discount periods for the future years. Example for
a Q4 stub:
Q4 Year 1 Year 2 Year 3 Year 4 Year 5
Normal Discount Periods with Stub: 0.25 1.25 2.25 3.25 4.25 5.25
Mid-Year Discount Periods with Stub: 0.125 0.75 1.75 2.75 3.75 4.75
Another example for a Q2 – Q4 stub (e.g. we’re valuing the company on March
31st and its Fiscal Year ends on December 31st):
Q2 – Q4 Year 1 Year 2 Year 3 Year 4 Year 5
Discount Periods with Stub: 0.75 1.75 2.75 3.75 4.75 5.75
Mid-Year Periods with Stub: 0.375 1.25 2.25 3.25 4.25 5.25
What is the logic here? Think about it like this: let’s take the example of the
normal discount period for Year 1 being 1.75, representing 3 quarters and then a
full year.
Now, ask yourself when you receive that cash flow in Year 1. You’re still
receiving it midway through that first year… in other words, you still use 0.5 for
the period.
However, you also need to take into account the 3 / 4 of this partial year because
3 quarters pass between now and the start of Year 1. So you still have 0.75 there,
and the mid-year discount period with the stub period is 0.75 + 0.5, or 1.25.
That is why it’s not 1.75 / 2, like you might expect: it’s about when you receive
that cash flow in Year, from the perspective of the start of Year 1 – and then you
add the total amount of time that passes between now and the start of Year 1.
There’s no mid-year discount applied there because we don’t receive any Year 1
cash in this first partial year."""
ADVANCED@DCF@"""How does the Terminal Value calculation change when we use the mid-year
convention?"""@"""When you’re discounting the Terminal Value back to its present value, you use
different numbers for the discount period depending on whether you’re using
the Multiples Method or Gordon Growth Method:
• Multiples Method: You add 0.5 to the final year discount number to
reflect that you’re assuming the company gets sold at the end of the year.
• Gordon Growth Method: You use the final year discount number as is,
because you’re assuming the free cash flows grow into perpetuity and that
they are still received throughout the year rather than just at the end."""
ADVANCED@DCF@"""What if you have a stub period and you’re using the mid-year convention –
how does Terminal Value change then?"""@"""It’s the same as what’s described above – a stub period in the beginning does not
make a difference."""
ADVANCED@DCF@"""How does a DCF for a private company differ?"""@"""The mechanics are the same, but calculating Cost of Equity and WACC is
problematic because you can’t find the market value of Equity or Beta for private
companies.
So you might estimate WACC based on the median WACC of its Public Comps,
and do the same for Cost of Equity if you’re using that as the Discount Rate."""
ADVANCED@DCF@"""How do you factor in one-time events such as raising Debt, completing
acquisitions, and so on in a DCF?"""@"""Normally you ignore these types of events because the whole point of calculating
Free Cash Flow is to determine the company’s cash flow on a recurring,
predictable basis.
If you know for a fact that something is going to occur in the near future, then
you could factor that in – issuing Debt or Equity would change Cost of Equity
and WACC (and the company’s Free Cash Flow in a Levered DCF); completing
an acquisition or buying an asset would reduce cash flow initially but perhaps
boost it later on."""
ADVANCED@DCF@"""What should you do if you don’t believe management’s projections in a DCF
model?"""@"""You can take a few different approaches:
• You could create your own projections.
• You could “hair-cut” management’s projections (reduce them by a certain
percentage) to make them more conservative.
• You could show a sensitivity table based on different growth rates and
margins, and show the values using both management’s projections and a
more conservative set of numbers."""
ADVANCED@DCF@"""Why would you not use a DCF for a bank or other financial institution?"""@"""Banks use Debt differently than other companies and do not use it to finance
their operations – they use it to create their “products” – loans – instead.
Also, interest is a critical part of banks’ business models and changes in
“Operating Assets and Liabilities” can be much larger than a bank’s Net Income.
Finally, CapEx does not correspond to re-investment in business for a bank, and
is often negligible.
For financial institutions (commercial banks and insurance firms), it’s more
common to use a Dividend Discount Model or Residual Income Model instead
of a DCF. See the industry-specific sections of the guide for more."""
ADVANCED@DCF@"""Walk me through a Dividend Discount Model (DDM) that you would use in
place of a normal DCF for financial institutions."""@"""The mechanics are the same as a DCF, but we use Dividends rather than Free
Cash Flows:
1. Project the company’s earnings, down to Earnings per Share (EPS).
2. Assume a Dividend Payout Ratio – what percentage of the EPS gets paid
out to shareholders in the form of Dividends – based on what the firm has
done historically and how much regulatory capital it needs.
3. Use this to calculate Dividends over the next 5-10 years.
4. Do a check to make sure that the firm still meets its required Tier 1
Capital Ratio and other capital ratios – if not, reduce Dividends.
5. Discount the Dividends in each year to their present value based on Cost
of Equity – NOT WACC – and then sum these up.
6. Calculate Terminal Value based on P / BV and Book Value in the final year,
and then discount this to its present value based on the Cost of Equity.
7. Sum the present value of the Terminal Value and the present values of the
Dividends to calculate the company’s net present value per share.
The key difference compared to a DDM for normal companies is the presence of
the capital ratios – you can’t just blindly make Dividends per Share a percentage
of EPS. See the industry-specific guides for more."""
ADVANCED@DCF@"""Do you think a DCF would work well for an oil & gas company?"""@"""If it’s an exploration & production (E&P)-focused company, generally a DCF
will not work well because:
• CapEx needs are enormous and will push FCF down to very low levels.
• Commodity prices are cyclical and both revenue and FCF are difficult to
project.
For other types of energy companies – services-based companies or downstream
companies that just refine and market oil and gas – a DCF might be more
appropriate.
For more on this topic and the alternative to a DCF that you use for oil & gas
companies (called a NAV, or Net Asset Value, analysis), see the industry-specific
guides."""
ADVANCED@DCF@"""How does a DCF change if you’re valuing a company in an emerging market?"""@"""The main difference is that you’ll use a much higher Discount Rate, and you may
not even necessarily link it to WACC or Cost of Equity… because there may not
even be a good set of Public Comps in the country.
You might also add in a premium for political risk and uncertainty, and you
might severely reduce management’s growth or profit expectations, especially if
they have a reputation for being overly optimistic."""
ADVANCED@DCF@"""When you’re calculating WACC, do you count Convertible Bonds as real
Debt?"""@"""Trick question. If the Convertible Bonds are in-the-money then you do not count
them as Debt, but instead assume that they contribute to dilution, so the
company’s Equity Value is higher.
If they’re out-of-the-money then you count them as Debt and use the interest
rate on the Convertible Bonds for the Cost of Debt (and include them in Debt in
the formula for Levered Beta)."""
ADVANCED@DCF@"""What about the treatment of other securities, like Mezzanine and other Debt
variations?"""@"""If interest is tax-deductible, you count them as Debt in the Levered Beta
calculation; otherwise they count as Equity, just like Preferred Stock.
For WACC itself, you normally look at each type of Debt separately and assume
that the “Cost” is the weighted average effective interest rate on that Debt."""
ADVANCED@DCF@"""Should you ever factor in off-Balance Sheet Assets and Liabilities in a DCF?"""@"""Potentially, yes, especially if they have a big impact on Enterprise Value and
Equity Value (i.e. if they’re something that the acquirer would have to repay).
But it’s not terribly common to see them, partially because when off-Balance
Sheet items are more important (for commercial banks with derivative books, for
example), you don’t even use a DCF."""
ADVANCED@DCF@"""How do Pension Obligations and the Pension Expense factor into a DCF?"""@"""If you’re running an Unlevered DCF and you’re counting Unfunded Pension
Obligations as Debt, you should exclude pension-related expenses from
Unfunded obligations on the Income Statement and Cash Flow Statement, for the
same reason you exclude interest payments on Debt.
For a Levered FCF you would do the opposite and leave in these expenses
because they’re a form of “interest expense.”"""
ADVANCED@DCF@"""Can you explain how to create a multi-stage DCF, and why it might be
useful?"""@"""You use a multi-stage DCF if the company grows at much different rates, has
much different profit margins, or has a different capital structure in different
periods.
For example, maybe the company grows revenue at 15% in the first two years,
then 10% in years 2-4, and then 5% in year 5, with decreasing growth each year
after that.
So you might separate that into 3 stages and then make different assumptions for
Free Cash Flow and the Discount Rate in each one.
Note that a standard DCF, by itself, is actually a two-stage DCF because you
divide it into the “near future” and “far future.”
You can divide it into more periods if you want, and it would just be an
extension of this concept."""
ADVANCED@DCF@"""How does Net Income Attributable to Noncontrolling Interests factor into
the Free Cash Flow calculation?"""@"""It doesn’t – or more specifically, it has no net impact because you subtract it at
the bottom of the Income Statement but then add it back on the Cash Flow
Statement.
Just be careful that you do both of those, or that you leave it out altogether – it
would be incorrect to only subtract it or to only add it back, which might happen
if you’re not careful with the calculation."""
ADVANCED@DCF@"""What about Net Income from Equity Interests?"""@"""Again, this should have no net impact on Free Cash Flow because you add it at
the bottom of the Income Statement and then subtract it out on the Cash Flow
Statement."""
ADVANCED@DCF@"""Which tax rate should you use when calculating Free Cash Flow – statutory
or effective?"""@"""Normally you use the effective tax rate because you want to capture what the
company is actually paying out in taxes, not what it “should” be paying out
according to standard federal and state rates.
Sometimes you may adjust the tax rate if it’s an unusual situation (e.g. the
company is a sole proprietorship LLC and therefore income is taxed at the
owner’s personal income tax rate, but a large corporation is considering
acquiring the company)."""
ADVANCED@DCF@"""When calculating FCF, you always take into account taxes. But when you
calculate Terminal Value, you don’t do that – isn’t this inconsistent? How
should you treat it?"""@"""Here’s how to think about this one:
• First off, if you use the Gordon Growth method to calculate Terminal
Value, you are taking into account taxes because you’re valuing the
company’s Free Cash Flow into perpetuity.
• And if you’re using the Terminal Multiple method, you’re implicitly
taking into account taxes because you’re assuming that [Relevant Metric]
* [Relevant Multiple] is the company’s present value from that point
onward, as of the final year. You’re not assuming that the company is
actually sold… just estimating what a buyer might pay for it, fully taking
into account the value that the buyer would receive from its far-in-the-
future, after-tax cash flows."""
ADVANCED@DCF@"""We’re creating a DCF for a company that is planning to buy a factory for
$100 in Cash in Year 4. Currently the net present value of this company,
according to the DCF, is $200. How would we change the DCF to account for
the factory purchase, and what would the new Enterprise Value be?"""@"""In this scenario, you would include additional CapEx spending of $100 in Year 4
of the DCF, which would reduce Free Cash Flow for that year by $100. The
Enterprise Value, in turn, would decrease by the present value of $100 in Year 4.
The math gets messy, but you would calculate the difference by dividing $100 by
((1 + Discount Rate)^4). Then you would subtract this amount from the
Enterprise Value."""
BASIC@Merger@"""Why would a company want to acquire another company?"""@"""A company would acquire another company if it believes it will earn a good
return on its investment – either in the form of a literal ROI, or in terms of a
higher Earnings Per Share (EPS) number, which appeals to shareholders.
There are several reasons why a buyer might believe this to be the case:
• The buyer wants to gain market share by buying a competitor.
• The buyer needs to grow more quickly and sees an acquisition as a way to do
that.
• The buyer believes the seller is undervalued.
• The buyer wants to acquire the seller’s customers so it can up-sell and cross-
sell products and services to them.
• The buyer thinks the seller has a critical technology, intellectual property, or
other “secret sauce” it can use to significantly enhance its business.
• The buyer believes it can achieve significant synergies and therefore make
the deal accretive for its shareholders."""
BASIC@Merger@"""Walk me through a basic merger model."""@"""“A merger model is used to analyze the financial profiles of 2 companies, the
purchase price and how the purchase is made, and it determines whether the
buyer’s EPS increases or decreases afterward.
Step 1 is making assumptions about the acquisition – the price and whether it
was done using cash, stock, debt, or some combination of those. Next, you
determine the valuations and shares outstanding of the buyer and seller and
project the Income Statements for each one.
Finally, you combine the Income Statements, adding up line items such as
Revenue and Operating Expenses, and adjusting for Foregone Interest on Cash
and Interest Paid on Debt in the Combined Pre-Tax Income line; you apply the
buyer’s Tax Rate to get the Combined Net Income, and then divide by the new
share count to determine the combined EPS.”
You could also add in the part about Goodwill and combining the Balance Sheets,
but it’s best to start with answers that are as simple as possible at first."""
BASIC@Merger@"""What’s the difference between a merger and an acquisition?"""@"""There’s always a buyer and a seller in any M&A deal – the difference is that in a
merger the companies are similarly-sized, whereas in an acquisition the buyer is
significantly larger (often by a factor of 2-3x or more).
Also, 100% stock (or majority stock) deals are more common in mergers because
similarly sized companies rarely have enough cash to buy each other, and cannot
raise enough debt to do so either."""
BASIC@Merger@"""Why would an acquisition be dilutive?"""@"""An acquisition is dilutive if the additional Net Income the seller contributes is not
enough to offset the buyer’s foregone interest on cash, additional interest paid on
debt, and the effects of issuing additional shares.
Acquisition effects – such as the amortization of Other Intangible Assets – can
also make an acquisition dilutive."""
BASIC@Merger@"""Is there a rule of thumb for calculating whether an acquisition will be
accretive or dilutive?"""@"""Yes, here it is:
• Cost of Cash = Foregone Interest Rate on Cash * (1 – Buyer Tax Rate)
• Cost of Debt = Interest Rate on Debt * (1 – Buyer Tax Rate)
• Cost of Stock = Reciprocal of the buyer’s P / E multiple, i.e. E / P or Net
Income / Equity Value.
• Yield of Seller = Reciprocal of the seller’s P / E multiple (ideally calculated
using the purchase price rather than the seller’s current share price).
You calculate each of the Costs, take the weighted average, and then compare
that number to the Yield of the Seller (the reciprocal of the seller’s P / E
multiple).
If the weighted “Cost” average is less than the Seller’s Yield, it will be accretive
since the purchase itself “costs” less than what the buyer gets out of it; otherwise
it will be dilutive.
Example: The buyer’s P / E multiple is 8x and the seller’s P / E multiple is 10x.
The buyer’s interest rate on cash is 4% and interest rate on debt is 8%. The buyer
is paying for the seller with 20% cash, 20% debt, and 60% stock. The buyer’s tax
rate is 40%.
• Cost of Cash = 4% * (1 – 40%) = 2.4%
• Cost of Debt = 8% * (1 – 40%) = 4.8%
• Cost of Stock = 1 / 8 = 12.5%
• Yield of Seller = 1 / 10 = 10.0%
Weighted Average Cost = 20% * 2.4% + 20% * 4.8% + 60% * 12.5% = 8.9%.
Since 8.9% is less than the Seller’s Yield, this deal will be accretive."""
BASIC@Merger@"""Wait a minute, though, does that formula really work all the time?"""@"""Nope. There are a number of assumptions here that rarely hold up in the real
world: the seller and buyer have the same tax rates, there are no other acquisition
effects such as new Depreciation and Amortization, there are no transaction fees,
there are no synergies, and so on.
And most importantly, the rule truly breaks down if you use the seller’s current
share price rather than the price the buyer is paying to purchase it.
It’s a great way to quickly assess a deal, but it is not a hard-and-fast rule."""
BASIC@Merger@"""A company with a higher P/E acquires one with a lower P/E – is this
accretive or dilutive?"""@"""Trick question. You can’t tell unless you also know that it’s an all-stock deal. If it’s
an all-cash or all-debt deal, the P / E multiple of the buyer doesn’t matter because
no stock is being issued.
If it is an all-stock deal, then the deal will be accretive since the buyer “gets”
more in earnings for each $1.00 used to acquire the other company than it does
from its own operations. The opposite applies if the buyer’s P / E multiple is
lower than the seller’s."""
BASIC@Merger@"""Why do we focus so much on accretion / dilution? Is EPS really that
important? Are there cases where it’s not relevant?"""@"""EPS is important mostly because institutional investors value it and base many
decisions on EPS and P / E multiples – not the best approach, but it is how they
think.
A merger model has many purposes besides just calculating EPS accretion /
dilution – for example, you could calculate the IRR of an acquisition if you
assume that the acquired company is resold in the future, or even that it
generates cash flows indefinitely into the future.
An equally important part of a merger model is assessing what the combined
financial statements look like and how key items change.
So it’s not that EPS accretion / dilution is the only important point in a merger
model – but it is what’s most likely to come up in interviews."""
BASIC@Merger@"""How do you determine the Purchase Price for the target company in an
acquisition?"""@"""You use the same Valuation methodologies we discussed in the Valuation
section. If the seller is a public company, you would pay more attention to the
premium paid over the current share price to make sure it’s “sufficient”
(generally in the 15-30% range) to win shareholder approval.
For private sellers, more weight is placed on the traditional methodologies."""
BASIC@Merger@""" All else being equal, which method would a company prefer to use when
acquiring another company – cash, stock, or debt?"""@"""Assuming the buyer had unlimited resources, it would almost always prefer to
use cash when buying another company. Why?
• Cash is cheaper than debt because interest rates on cash are usually under 5%
whereas debt interest rates are almost always higher than that. Thus,
foregone interest on cash is almost always less than the additional interest
paid on debt for the same amount of cash or debt.
• Cash is almost always cheaper than stock because most companies’ P / E
multiples are in the 10 – 20x range… which equals a 5-10% “Cost of Stock.”
• Cash is also less risky than debt because there’s no chance the buyer might
fail to raise sufficient funds from investors, or that the buyer might default.
• Cash is also less risky than stock because the buyer’s share price could
change dramatically once the acquisition is announced."""
BASIC@Merger@"""You said “almost always” above. So could there be cases where cash is
actually more expensive than debt or stock?"""@"""With debt this is impossible because it makes no logical sense: why would a bank
ever pay more on cash you’ve deposited than it would charge to customers who
need to borrow money?
With stock it is almost impossible, but sometimes if the buyer has an extremely
high P / E multiple – e.g. 100x – the reciprocal of that (1%) might be lower than
the after-tax cost of cash. This is rare. Extremely rare."""
BASIC@Merger@"""If a company were capable of paying 100% in cash for another company,
why would it choose NOT to do so?"""@"""It might be saving its cash for something else, or it might be concerned about
running low on cash if business takes a turn for the worst.
Its stock may also be trading at an all-time high and it might be eager to use that
“currency” instead, for the reasons stated above: stock is less expensive to issue if
the company has a high P / E multiple and therefore a high stock price."""
BASIC@Merger@"""How much debt could a company issue in a merger or acquisition?"""@"""You would look at Comparable Companies and Precedent Transactions to
determine this. You would use the combined company’s EBITDA figure, find the
median Debt / EBITDA ratio of the companies or deals you’re looking at, and
apply that to the company’s own EBITDA figure to get a rough idea of how
much debt it could raise.
You could also look at “Debt Comps” for similar, recent deals and see what types
of debt and how many tranches they have used."""
BASIC@Merger@"""When would a company be MOST likely to issue stock to acquire another
company?"""@"""1. The buyer’s stock is trading at an all-time high, or at least at a very high
level, and it’s therefore “cheaper” to issue stock than it normally would be.
2. The seller is almost as large as the buyer and it’s impossible to raise
enough debt or use enough cash to acquire the seller."""
BASIC@Merger@"""Let’s say that a buyer doesn’t have enough cash available to acquire the
seller. How could it decide between raising debt, issuing stock, or some
combination of those?"""@"""There’s no simple rule to decide – key factors include:
• The relative “cost” of both debt and stock. For example, if the company is
trading at a higher P / E multiple it may be cheaper to issue stock (e.g. P /
E of 20x = 5% cost, but debt at 10% interest = 10% * (1 – 40%) = 6% cost.
• Existing debt. If the company already has a high debt balance, it likely
can’t raise as much new debt.
• Shareholder dilution. Shareholders do not like the dilution that comes
with issuing new stock, so companies try to minimize this.
• Expansion plans. If the buyer expands, begins a huge R&D effort, or buys
a factory in the future, it’s less likely to use cash and/or debt and more
likely to issue stock so that it has enough funds available."""
BASIC@Merger@"""Let’s say that Company A buys Company B using 100% debt. Company B
has a P / E multiple of 10x and Company A has a P / E multiple of 15x. What
interest rate is required on the debt to make the deal dilutive?"""@"""• Company A Cost of Stock = 1 / 15 = 6.7%
• Company B Yield = 1 / 10 = 10.0%
Therefore, the after-tax Cost of Debt must be above 10% for the acquisition cost to
exceed Company B’s Yield.
10% / (1 – 40%) = 16.7%, so we can say “above approximately 17%” for the
answer. That is an exceptionally high interest rate, so a 100% debt deal here
would almost certainly be accretive instead."""
BASIC@Merger@"""Let’s go through another M&A scenario. Company A has a P / E of 10x,
which is higher than the P / E of Company B. The interest rate on debt is 5%. If
Company A acquires Company B and they both have 40% tax rates, should
Company A use debt or stock for the most accretion?"""@"""• Company A Cost of Debt = 5% * (1 – 40%) = 3%
• Company A Cost of Stock = 1 / 10 = 10%
• Company B Yield = Higher than 10% since its P / E multiple is lower
Therefore, this deal will always be accretive regardless of whether Company A
uses debt or stock since both “cost” less than Company B’s Yield.
However, Company A will achieve far more accretion if it uses 100% debt
because the Cost of Debt (3%) is much lower than the Cost of Stock (10%)."""
BASIC@Merger@"""This is a multi-part question. Let’s look at another M&A scenario:"""@"""• Company A: Enterprise Value of 100, Market Cap of 80, EBITDA of 10, Net
Income of 4.
• Company B: Enterprise Value of 40, Market Cap of 40, EBITDA of 8, Net
Income of 2.
First, calculate the EV / EBITDA and P / E multiples for each one.
• Company A: EV / EBITDA = 100 / 10 = 10x, P / E = 80 / 4 = 20x.
• Company B: EV / EBITDA = 40 / 8 = 5x, P / E = 40 / 2 = 20x."""
BASIC@Merger@"""Good. Now, Company A decides to acquire Company B using 100% cash.
What are the combined EBITDA and P / E multiples?"""@"""In this scenario, you add the Market Caps of both companies together and then
adjust for the Cash, Debt, and Stock used.
Combined Market Cap = 120. Previously, A had 20 more Debt than Cash, and B
had the same amount of Cash and Debt.
To get real numbers here, let’s just say that A had 60 of Debt and 40 of Cash.
Afterward, the Debt remains at 60 but all the cash is gone because it used the
Cash to acquire B. We don’t need to look at B’s numbers at all because its Cash
and Debt cancel each other out.
So the Combined Enterprise Value = 120 + 60 = 180.
You add the EBITDA and Net Income from both companies to get the combined
figures. This is not 100% accurate because Interest Income changes for Company
A since it’s using cash, but it’s small enough to ignore here:
• Combined EV / EBITDA = 180 / (10 + 8) = 180 / 18 = 10x.
• Combined P / E = 120 / (4 + 2) = 120 / 6 = 20x."""
BASIC@Merger@"""Now, let’s say that Company A instead uses 100% debt, at a 10% interest
rate and 25% tax rate, to acquire Company B. What are the combined multiples?"""@"""Once again, you can add the Market Caps so the Combined Market Cap is 120.
The combined company has 40 of additional Debt, so if we continue with the
assumption that A has 60 of Debt and 40 of Cash the Enterprise Value is 120 + 60
+ 40 – 40 = 180, the same as in the previous example.
The combined EBITDA is still 18, so EV / EBITDA = 180 / 18 = 10x.
But the combined Net Income has changed. Normally, A Net Income + B Net
Income = 6…
But now we have 40 of debt at 10% interest, which is 4, and when multiplied by
(1 – 25%), equals 3. So Net Income falls to 3, and Combined P / E = 120 / 3 = 40x."""
BASIC@Merger@"""What was the point of this scenario and these questions? What does it tell
you about valuation multiples and M&A activity?"""@"""The main takeaway is that the combined P / E multiple may be much different
depending on the purchase method (cash/stock/debt).
The EV / EBITDA multiple, however, is not affected because EBITDA excludes
interest income and interest expense. And regardless of the cash, debt, or stock
used, the combined Enterprise Value will always be the same.
Think about it: if you use Cash, Enterprise Value goes up… if you raise
additional Debt, Enterprise Value also goes up… and if you issue stock,
Enterprise Value also goes up because the Combined Market Cap goes up."""
BASIC@Merger@"""Why would a strategic acquirer typically be willing to pay more for a
company than a private equity firm would?"""@"""Because the strategic acquirer can realize revenue and cost synergies that the
private equity firm cannot unless it combines the company with a
complementary portfolio company. Those synergies make it easier for the
strategic acquirer to pay a higher price and still realize a solid return on
investment."""
BASIC@Merger@"""What are the effects of an acquisition?"""@"""1. Foregone Interest on Cash – The buyer loses the Interest it would have
otherwise earned if it uses cash for the acquisition.
2. Additional Interest on Debt – The buyer pays additional Interest Expense
if it uses debt.
3. Additional Shares Outstanding – If the buyer pays with stock, it must
issue additional shares.
4. Combined Financial Statements – After the acquisition, the seller’s
financial statements are added to the buyer’s.
5. Creation of Goodwill & Other Intangibles – These Balance Sheet items
that represent the premium paid to a seller’s Shareholders’ Equity also get
created.
There’s more to it than this (see the Advanced section), but this is usually
sufficient to mention in interviews."""
BASIC@Merger@"""Why do Goodwill & Other Intangibles get created in an acquisition?"""@"""These represent the amount that the buyer has paid over the book value
(Shareholders’ Equity) of the seller. You calculate the number by subtracting the
seller’s Shareholders’ Equity (technically the Common Shareholders’ Equity)
from the Equity Purchase Price.
Goodwill and Other Intangibles represent the value of customer relationships,
employee skills, competitive advantages, brand names, intellectual property, and
so on – valuable, but not physical Assets in the same way factories are."""
BASIC@Merger@"""What is the difference between Goodwill and Other Intangible Assets?"""@"""Goodwill typically stays the same over many years and is not amortized. It
changes only if there’s Goodwill Impairment (or another acquisition).
Other Intangible Assets, by contrast, are amortized over several years and affect
the Income Statement by reducing Pre-Tax Income.
Technically, Other Intangible Assets might represent items that “expire” over
time, such as copyrights or patents, but you do not get into that level of detail as
a banker – it’s something that accountants and auditors would determine post-
acquisition."""
BASIC@Merger@"""What are some more advanced acquisition effects that you might see in a
merger model?"""@"""• PP&E and Fixed Asset Write-Ups – You may write up the values of these
Assets in an acquisition, under the assumption that the market values
exceed the book values.
• Deferred Tax Liabilities and Deferred Tax Assets – You may adjust these
up or down depending on the asset write-ups and deal type.
• Transaction and Financing Fees – You also need to factor in these fees
into the model somewhere.
• Inter-Company Accounts Receivable and Accounts Payable – Two
companies “owing” each other cash no longer makes sense after they’ve
become the same company.
• Deferred Revenue Write-Down – Accounting rules state that you can
only recognize the profit portion of the seller’s Deferred Revenue post-
acquisition. So you often write down the expense portion of the seller’s
Deferred Revenue over several years in a merger model.
You do not need to know all the details for entry-level interviews, but you
should be aware that there are more advanced adjustments in M&A deals."""
BASIC@Merger@"""What are synergies, and can you provide a few examples?"""@"""Synergies refer to cases where 2 + 2 = 5 (or 6, or 7…) in an acquisition. The buyer
gets more value than out of an acquisition than what the financials would
otherwise suggest.
There are 2 types: revenue synergies and cost (or expense) synergies.
• Revenue Synergies: The combined company can cross-sell products to new
customers or up-sell additional products to customers. It might also be able to
expand into new geographies as a result of the deal.
• Expense Synergies: The combined company can consolidate buildings and
administrative staff and can lay off redundant employees. It might also be
able to shut down redundant stores or locations."""
BASIC@Merger@"""How are synergies used in merger models?"""@"""• Revenue Synergies: Normally you add these to the Revenue figure for the
combined company and then assume a certain margin on the Revenue (all
additional Revenue costs something) – this additional Revenue then flows
through the rest of the combined Income Statement, and you reflect the
additional expenses as well.
• Expense Synergies: Normally you reduce the combined COGS or
Operating Expenses by this amount, which in turn boosts the combined
Pre-Tax Income and Net Income, increasing the EPS and making the deal
more accretive."""
BASIC@Merger@"""Are revenue or expense synergies more important?"""@"""Revenue synergies are rarely taken seriously because they’re so hard to predict.
Expense synergies are taken a bit more seriously because it’s more
straightforward to see how buildings and locations might be consolidated and
how many redundant employees might be eliminated."""
BASIC@Merger@"""Let’s say a company overpays for another company – what happens
afterward?"""@"""A high amount of Goodwill & Other Intangibles would be created if the purchase
price is far above the Shareholders’ Equity of the target. In the years following
the acquisition, the buyer may record a large Goodwill Impairment Charge if it
reassesses the value of the seller and finds that it truly overpaid."""
BASIC@Merger@"""A buyer pays $100 million for the seller in an all-stock deal, but a day later
the market decides that it’s only worth $50 million. What happens?"""@"""The buyer’s share price would fall by whatever per-share dollar amount
corresponds to the $50 million loss in value. It would not necessarily be cut in
half.
Depending on the deal structure, the seller would effectively only receive half of
what it had originally negotiated.
This illustrates one of the major risks of all-stock deals: sudden changes in share
price could dramatically impact the valuation (there are ways to hedge against
that risk – see the Advanced section)."""
BASIC@Merger@"""Why do most mergers and acquisitions fail?"""@"""M&A is “easier said than done.” In practice it’s very difficult to acquire and
integrate a different company, realize synergies, and also turn the acquired
company into a profitable division.
Many deals are also done for the wrong reasons, such as the CEO’s massive ego
or pressure from shareholders. Any deal done without both parties’ best
interests in mind is likely to fail."""
BASIC@Merger@"""What role does a merger model play in deal negotiations?"""@"""The model is used as a sanity check and as a way to test various assumptions. A
company would never decide to do a deal because of the output of a model.
It might say, “OK, the model tells us this deal could work and would be
moderately accretive – it’s worth exploring in more detail.”
It would never say, “Aha! This model predicts 21% accretion – we should have
acquired this company yesterday!”
Emotions, ego and personalities play a far bigger role in M&A than numbers do."""
BASIC@Merger@"""What types of sensitivities would you look at in a merger model? What
variables would you analyze?"""@"""The most common variables to analyze are Purchase Price, % Stock/Cash/Debt,
Revenue Synergies, and Expense Synergies. Sometimes you also look at
different operating sensitivities, like Revenue Growth or EBITDA Margin, but it’s
more common to build these into your model as different scenarios instead.
You might look at sensitivity tables showing the EPS accretion/dilution at
different ranges for the Purchase Price vs. Cost Synergies, Purchase Price vs.
Revenue Synergies, or Purchase Price vs. % Cash (and so on)."""
BASIC@Merger@"""If the seller has existing Debt on its Balance Sheet in an M&A deal, how do
you deal with it?"""@"""You assume that the Debt either stays on the Balance Sheet or is refinanced (paid
off) in the acquisition. The terms of most Debt issuances state that they must be
repaid in a “change of control” scenario (i.e. when a buyer acquires over 50% of a
company), so you often assume that the Debt is paid off in a deal.
That increases the price that the buyer needs to pay for the seller."""
BASIC@Merger@"""Wait a minute. If you use Cash or Debt to acquire another company, it’s clear
how you could use them to pay off existing Debt… but how does that work
with Stock?"""@"""Remember what happens when a company issues shares: it sells the shares to
new investors and receives cash in exchange for them. Here, they would do the
same thing and issue a small portion of the shares to 3rd party investors rather
than the seller to raise the cash necessary to repay the debt.
The buyer might also wait until the deal closes before it issues additional shares
to pay off the debt. And it could also use cash on-hand to repay the debt, or
refinance the debt with a new debt issuance."""
ADVANCED@Merger@"""What’s the purpose of Purchase Price Allocation in an M&A deal? Can you
explain how it works?"""@"""The ultimate purpose is to make the combined Balance Sheet balance.
This harder than it sounds because many items get adjusted up or down (e.g.
PP&E), some items disappear altogether (e.g. the seller’s Shareholders’ Equity),
and some new items get created (e.g. Goodwill).
To complete the process, you look at every single item on the seller’s Balance
Sheet and then assess the fair market values of all those items, adjusting them
up or down as necessary.
So if the buyer pays, say, $1 billion for the seller, you figure out how much of
that $1 billion gets allocated to each Asset on the Balance Sheet.
Goodwill (and Other Intangible Assets) serves as the “plug” and ensures that
both sides balance you’ve made all the adjustments. Goodwill is roughly equal to
the Equity Purchase Price minus the seller’s Shareholders’ Equity and other
adjustments."""
ADVANCED@Merger@"""Explain the complete formula for how to calculate Goodwill in an M&A deal."""@"""Goodwill = Equity Purchase Price – Seller Book Value + Seller’s Existing
Goodwill – Asset Write-Ups – Seller’s Existing Deferred Tax Liability + Write-
Down of Seller’s Existing Deferred Tax Asset + Newly Created Deferred Tax
Liability + Intercompany Accounts Receivable – Intercompany Accounts Payable
A couple notes here:
• Seller Book Value is just the Shareholders’ Equity number (technically, the
Common Shareholders’ Equity number).
• You add the Seller’s Existing Goodwill because it is “reset” and written
down to $0 in an M&A deal.
• You subtract the Asset Write-Ups because these are additions to the
Assets side of the Balance Sheet – Goodwill is also an asset, so effectively
you need less Goodwill to “plug the hole.”
• Normally you assume 100% of the Seller’s existing DTL is written down.
• The seller’s existing DTA may or may not be written down completely
(keep reading this section).
• You add Intercompany Accounts Receivable because they go away, which
reduces the Assets side; the opposite applies for Intercompany AP."""
ADVANCED@Merger@"""Why do we adjust the values of Assets such as PP&E in an M&A deal?"""@"""Because often the fair market value is significantly different from the Balance
Sheet value. A perfect example is real estate – usually it appreciates over time,
but due to the rules of accounting, companies must depreciate it on the Balance
Sheet and show a declining balance over time to reflect the allocation of costs
over a long time period.
Investments, Inventory, and other Assets may have also “drifted” from their fair
market values since the Balance Sheet is recorded at historical cost for companies
in most industries (exceptions, such as commercial banking, do exist)."""
ADVANCED@Merger@"""What’s the logic behind Deferred Tax Liabilities and Deferred Tax Assets?"""@"""We go into this in more detail in the upcoming section on Deferred Taxes and
NOLs.
The basic idea is that you normally write down most of the seller’s existing DTLs
and DTAs to “reset” its tax basis, since it’s now part of another entity.
And then you may create new DTLs or DTAs if there are Asset Write-Ups or
Write-Downs and the book and tax Depreciation and Amortization numbers
differ.
If there are write-ups, a Deferred Tax Liability will be created in most deals since
the Depreciation on the write-ups is not tax-deductible, which means that the
company will pay more in cash taxes; the opposite applies for write-downs and
there, a Deferred Tax Asset would be created.
See the section on NOLs and Deferred Taxes for more details."""
ADVANCED@Merger@"""How do you treat items like Preferred Stock, Noncontrolling Interests, Debt,
and so on, and how do they affect Purchase Price Allocation?"""@"""Normally you build in the option to repay (or in the case of Noncontrolling
Interests, purchase the remainder of) these items or assume them in the Sources
& Uses schedule.
If you repay them, additional cash/debt/stock is required to purchase the seller.
However, that choice does not affect Purchase Price Allocation.
You always start with the Equity Purchase Price there, which excludes the
treatment of all these items.
Also, you only use the seller’s Common Shareholders’ Equity in the PPA schedule,
which excludes Preferred Stock and Noncontrolling Interests."""
ADVANCED@Merger@"""So do you use Equity Value or Enterprise Value for the Purchase Price in a
merger model?"""@"""This is a trick question because neither one is entirely accurate. The PPA
schedule is based on the Equity Purchase Price, but the actual amount of
cash/stock/debt used is based on that Equity Purchase Price plus the additional
funds needed to repay debt, pay for transaction-related fees, and so on.
That number is not exactly “Enterprise Value” – it’s something in between
Equity Value and Enterprise Value, and it’s normally labeled “Funds Required”
in a model."""
ADVANCED@Merger@"""How do you reflect transaction costs, financing fees, and miscellaneous
expenses in a merger model?"""@"""You expense transaction and miscellaneous fees (such as legal and accounting
services) upfront and capitalize the financing fees and amortize them over the
term of the debt.
Expensed transaction fees come out of Retained Earnings when you adjust the
Balance Sheet (and Cash on the other side), while Capitalized Financing Fees
appear as a new Asset on the Balance Sheet (and reduce Cash immediately) and
are amortized each year according to the tenor of the debt.
In reality, you pay for all of these fees upfront in cash. However, since financing
fees correspond to a long-term item rather than a one-time transaction, they’re
amortized over time on the Balance Sheet. It’s similar to how new CapEx
spending is depreciated over time.
None of this affects Purchase Price Allocation. These fees simply increase the
“Funds Required” number discussed above, but they make absolutely no impact
on the Equity Purchase Price or on the amount of Goodwill created."""
ADVANCED@Merger@"""How would you treat Debt differently in the Sources & Uses table if it is
refinanced rather than assumed?"""@"""If the buyer assumes the Debt, it appears in both the Sources and Uses columns
and has no effect on the Funds Required.
If the buyer pays off Debt, it appears only in the Uses column and increases the
Funds Required."""
ADVANCED@Merger@"""What are the main 3 transaction structures you could use to acquire another
company?"""@"""The 3 main structures are the Stock Purchase, Asset Purchase, and 338(h)(10)
Election.
Note that Stock Purchases and Asset Purchases exist in some form in countries
worldwide, but that the 338(h)(10) Election is specific to the US – however, there
may be equivalent legal structures in other countries.
Here’s how they differ:
'Page 48-49 Merger book'
Part of the reason that both parties favor the 338(h)(10) structure is that buyers
typically agree to pay more to compensate sellers for the favorable tax treatment
they receive.
"""
ADVANCED@Merger@"""Would a seller prefer a Stock Purchase or an Asset Purchase? What about the
buyer?"""@"""A seller almost always prefers a Stock Purchase to avoid double taxation and to
dispose of all its Liabilities
The buyer almost always prefers an Asset Purchase so it can be more careful
about what it acquires and to get the tax benefit from being able to deduct D&A
on Asset Write-Ups for tax purposes.
However, it’s not always possible to “pick” one or the other – for example, if the
seller is a large public company only a Stock Purchase is possible in 99% of cases."""
ADVANCED@Merger@"""Why might a company want to use 338(h)(10) when acquiring another
company?"""@"""A Section 338(h)(10) election blends the benefits of a Stock Purchase and an Asset
Purchase:
• Legally it is a Stock Purchase, but accounting-wise it’s treated like an
Asset Purchase.
• The seller is still subject to double-taxation – capital gains on any Assets
that have appreciated and on the proceeds from the sale.
• But the buyer receives a step-up tax basis on the new Assets it acquires,
and it can depreciate and amortize them so it saves on taxes.
Even though sellers still get taxed twice, buyers will often pay more in a
338(h)(10) deal because of the tax-savings potential.
It’s particularly helpful for:
• Sellers with high NOL balances (more tax-savings for the buyer because
this NOL balance will be written down completely – so more of the excess
purchase price can be allocated to Asset Write-Ups).
• Companies that have been S-corporations for over 10 years – in this case
they do not have to pay taxes on the appreciation of their Assets.
The requirements to use 338(h)(10) are complex and it cannot always be used.
For example, if the seller is a C Corporation it can’t be applied; also, if the buyer
is not a C Corporation (e.g. a private equity firm), it also can’t be used."""
ADVANCED@Merger@"""How do you take into account NOLs in an M&A deal?"""@"""You apply Section 382 to determine how much of the seller’s NOLs are usable
each year.
• Allowable Annual NOL Usage = Equity Purchase Price * Highest of Past
3 Months’ Adjusted Long-Term Rates
So if our Equity Purchase Price were $1 billion and the highest adjusted long-
term rate were 5%, then we could use $1 billion * 5% = $50 million of NOLs each
year.
If the seller had $250 million in NOLs, then the combined company could use $50
million of them each year for 5 years to offset its taxable income."""
ADVANCED@Merger@"""Why do deferred tax liabilities (DTLs) and deferred tax assets (DTAs) get
created in M&A deals?"""@"""These get created when you write up assets – both tangible and intangible – and
when you write down assets in a transaction. An asset write-up creates a
deferred tax liability, and an asset write-down creates a deferred tax asset.
You write down and write up assets because their book values – what’s on the
Balance Sheet – often differ substantially from their “fair market values.”
An asset write-up creates a deferred tax liability because you’ll have a higher
Depreciation expense on the new asset, which means you save on taxes in the
short-term – but eventually you’ll have to pay them back, so you get a liability.
The opposite applies for an asset write-down and a deferred tax asset."""
ADVANCED@Merger@"""How do DTLs and DTAs affect the Balance Sheet Adjustments in an M&A
deal?"""@"""You take them into account with everything else when calculating the amount of
Goodwill & Other Intangibles to create on your pro-forma Balance Sheet. The
formulas are as follows:
• Deferred Tax Asset = Asset Write-Down * Tax Rate
• Deferred Tax Liability = Asset Write-Up * Tax Rate
So let’s say you were buying a company for $1 billion with 50% cash and 50%
debt, and you had a $100 million asset write-up and a tax rate of 40%. In addition,
the seller has total Assets of $200 million, total Liabilities of $150 million, and
Shareholders’ Equity of $50 million.
Here’s what would happen on the combined company’s balance sheet (ignoring
transaction and financing fees):
• First, you simply add the seller’s Assets and Liabilities (but NOT
Shareholders’ Equity – it is wiped out) to the buyer’s to get your “initial”
Balance Sheet. Assets are up by $200 million and Liabilities are up by $150
million.
• Then, Cash on the Assets side goes down by $500 million.
• You have an Asset Write-Up of $100 million, so Assets go up by $100
million.
• Debt on the Liabilities & Equity side goes up by $500 million.
• You get a new Deferred Tax Liability of $40 million ($100 million * 40%)
on the Liabilities & Equity side.
• Assets are down by $200 million total and Liabilities & Shareholders’
Equity are up by $690 million ($500 + $40 + $150).
• So you need Goodwill & Intangibles of $890 million on the Assets side to
make both sides balance."""
ADVANCED@Merger@"""Could you get DTLs or DTAs in an Asset Purchase?"""@"""No, because in an Asset Purchase the book basis of assets always matches the tax
basis. DTLs and DTAs get created in Stock Purchases because the book values of
Assets are written up or written down, but the tax values are not."""
ADVANCED@Merger@"""How do you factor in DTLs into forward projections in a merger model?"""@"""You create a book vs. cash tax schedule and figure out what the company owes
in taxes based on the Pre-Tax Income on its books, and then you determine what
it actually pays in cash taxes based on its NOLs and its new D&A expenses (from
any Asset Write-Ups).
Anytime the “cash” tax expense exceeds the “book” tax expense you record this
as a decrease to the Deferred Tax Liability on the Balance Sheet; if the “book”
expense is higher, then you record that as an increase to the DTL."""
ADVANCED@Merger@"""Can you give me an example of how you might calculate revenue synergies?"""@"""“Sure. Let’s say that Company A sells 10,000 widgets per year in North America
at an average price of $15.00, and Company B sells 5,000 widgets per year in
Europe at an average price of $10.00. Company A believes that it can sell its own
widgets to 20% of Company B’s customers, so after it acquires Company B it will
earn an extra 20% * 5,000 * $15.00 in revenue, or $15,000.
It will also have expenses associated with those extra sales, so you need to reflect
those as well – if it has a 50% margin, for example, it would reflect an additional
$7,500, rather than $15,000, to Operating Income and Pre-Tax Income on the
combined Income Statement.”
This last point about expenses associated with revenue synergies is important
and one that a lot of people forget – there’s no such thing as “free” revenue with
no associated costs."""
ADVANCED@Merger@"""Should you estimate revenue synergies based on the seller’s customers and
the seller’s financials, or the buyer’s customers and the buyer’s financials?"""@"""Either one works. You could assume that the buyer leverages the seller’s products
or services and sells them to its own customer base – but typically you assume an
uplift to the seller’s average selling price, or something else that the buyer can do
with the seller’s existing customers.
You approach it that way because the buyer, as a larger company, can make
more of an immediate impact on the seller than the seller can make on the buyer."""
ADVANCED@Merger@"""Walk me through an example of how to calculate expense synergies."""@"""“Let’s say that Company A wants to acquire Company B. Company A has 5,000
SG&A-related employees, whereas Company B has around 1,000. Company A
calculates that post-transaction, it will only need about 800 of Company B’s
SG&A employees, and its existing employees can take over the rest of the work.
To calculate the Operating Expenses the combined company would save, we
would multiply these 200 employees that Company A is going to fire post-
transaction by their average salary, benefits, and other compensation expenses.”"""
ADVANCED@Merger@"""How do you think about synergies if the combined company can consolidate
buildings?"""@"""If the buildings are leased, you assume that both lease expenses go away and are
replaced with a new, larger lease expense for the new or expanded building. So
in that case it is a simple matter of New Lease Expense – Old, Separate Lease
Expenses to determine the synergies.
If the buildings are owned, it gets more complicated because one or both of them
will be sold, or perhaps leased out to someone else. Then you would have to look
at Depreciation and Interest savings, as well as additional potential income if the
building is rented out."""
ADVANCED@Merger@"""What if there are CapEx synergies? For example, what if the buyer can
reduce its CapEx spending because of certain assets the seller owns?"""@"""In this case, you would start recording a lower CapEx charge on the combined
Cash Flow Statement, and then reflect a reduced Depreciation charge on the
Income Statement from that new CapEx spending each year.
You would not start seeing the results until Year 2 because reduced Depreciation
only comes after reduced CapEx spending. This scenario would be much easier to
model with a full PP&E schedule where you can adjust the spending and the
resulting Depreciation each year."""
ADVANCED@Merger@"""What happens when you acquire a 30% stake in a company? Can you still
use an accretion / dilution analysis?"""@"""You record this 30% as an “Investment in Equity Interest” or “Associate
Company” on the Assets side of the Balance Sheet, and you reduce Cash to
reflect the purchase (assuming that Cash was used). You use this treatment for
all ownership percentages between 20% and 50%.
You can still use an accretion / dilution analysis; just make sure that the new Net
Income reflects the 30% of the other company’s Net Income that you are entitled
to."""
ADVANCED@Merger@"""What happens when you acquire a 70% stake in a company?"""@"""For all acquisitions where over 50% but less than 100% of another company gets
acquired, you still go through the purchase price allocation process and create
Goodwill, but you record a Noncontrolling Interest on the Liabilities side for the
portion you do not own. You also consolidate 100% of the other company’s
statements with your own, even if you only own 70% of it.
Example: You acquire 70% of another company using Cash. The company is
worth $100, and has Assets of $180, Liabilities of $100, and Equity of $80.
You add all of its Assets and Liabilities to your own, but you wipe out its Equity
since it’s no longer considered an independent entity. The Assets side is up by
$180 and the Liabilities side is up by $100.
You also used $70 of Cash, so the Assets side is now only up by $110.
We allocate the purchase price here, and since 100% of the company was worth
$100 but its Equity was only $80, we create $20 of Goodwill – so the Assets side is
up by $130.
On the Liabilities side, we create a Noncontrolling Interest of $30 to represent the
30% of the company that we do not own. Both sides are up by $130 and balance."""
ADVANCED@Merger@"""Let’s say that a company sells a subsidiary for $1000, paid for by the buyer in
Cash. The buyer is acquiring $500 of Assets with the deal, but it’s assuming no
Liabilities. Assume a 40% tax rate. What happens on the 3 statements after the
sale?"""@"""Income Statement: We record a Gain of $500, since we sold Balance Sheet Assets
of $500 for $1,000. That boosts Pre-Tax Income by $500 and Net Income by $300
assuming a 40% tax rate.
Cash Flow Statement: Net Income is up by $300, but we subtract the Gain of
$500 in the CFO section, so cash flow is down by $200 so far. We add the full
amount of sale proceeds ($1000) in the CFI section, so cash at the bottom is up by
$800.
Balance Sheet: Cash on the Assets side is up by $800, but we’ve lost $500 in
Assets, so the Assets side is up by $300. On the other side, Shareholders’ Equity
is also up by $300 due to the increased Net Income.
In this scenario, you’d also have to go back and remove revenue and expenses
from this sold-off division and label them “Discontinued Operations” on the
financial statements prior to the close of the sale."""
ADVANCED@Merger@"""Now let’s say that we decide to buy 100% of another company’s subsidiary
for $1000 in cash. This subsidiary has $500 in Assets and $300 in Liabilities,
and we are acquiring all the Assets and assuming all the Liabilities. What
happens on the statements immediately afterward?"""@"""Income Statement: No changes.
Cash Flow Statement: We record $1000 for “Acquisitions” in the CFI section, so
cash at the bottom is down by $1000.
Balance Sheet: Cash is down by $1000 on the Assets side, but we add in the
subsidiary’s Assets of $500, so this side is down by $500 so far. We also create
$800 worth of Goodwill because we bought this subsidiary for $1000, but (Assets
Minus Liabilities) was only $200. So the Assets side is up by $300. The other side
is up by $300 because of the assumed Liabilities, so both sides balance."""
ADVANCED@Merger@"""What’s the purpose of calendarization in a merger model?"""@"""You need to make sure that the buyer and seller use the same fiscal years post-
transaction. Normally you change the seller’s financial statements to match the
buyer’s.
If the buyer’s fiscal year ends on December 31 and the seller’s ends on June 30,
for example, you would have to take quarter 3 (Jan – Mar) and quarter 4 (Apr –
Jun) from the seller’s most recent fiscal year and then add quarters 1 (Jul – Sep)
and 2 (Oct – Dec) from the seller’s current fiscal year to match the buyer’s current
fiscal year.
The second point here is that you may also need to create a stub period from the
date when the deal closes to the end of the buyer’s current fiscal year.
For example, if the deal closes on September 30 but the buyer’s fiscal year ends
on December 31, the buyer and seller are still one combined company for that 3-
month period and you need to account for that, normally via a separate “stub
period” right before the start of the first full fiscal year as a combined entity."""
ADVANCED@Merger@"""Let’s say that the buyer’s fiscal year ends on December 31, the seller’s fiscal
year ends on June 30, and the transaction closes on September 30. How would
you create a merger model for this scenario?"""@"""You would need to create quarterly financial statements for both the buyer and
sell for the September 30 – December 31 period, and you would show that as the
first “combined” period in the merger model.
So you would combine the Income Statements, Balance Sheets, and Cash Flow
Statements for that 3-month period, and then keep them combined for the rest of
the time after that (adjusting the seller’s financial statements to match the fiscal
year of the buyer, as in the example above).
Normally you do not care much about accretion / dilution for stub periods like
this, so you would just calculate it for the first full fiscal year after the transaction
close."""
ADVANCED@Merger@"""Does anything change if the transaction closes on March 31 instead?"""@"""The only difference is that now you need a 9-month stub period rather than a 3-
month stub period.
So you would need to find or create financial statements for Q4 of the seller’s
fiscal year ending June 30, and then Q1 and Q2 for the next year.
You would also take the last 3 quarters of the buyer’s fiscal year and combine the
statements from that period with the seller’s, taking into account all the normal
acquisition effects for that period."""
ADVANCED@Merger@"""What if the deal closes on a more “random” date, like August 17?"""@"""There are a couple options here; you could attempt to “roll-forward” the
financial statements to this date in between quarterly end dates. For example,
you might create an August 17 Balance Sheet by looking at the Balance Sheet as
of June 30 and the Balance Sheet as of September 30 and averaging them (since
August 17 is roughly in the middle).
For the Income Statement and Cash Flow Statement, you could just take the July
1 – September 30 quarterly numbers and multiply by (43 / 90) since 43 days of the
quarter will pass in the “combined” period between August 17 and September 30.
The main problem is that this method creates a lot of extra work, because now
you have to roll forward all the statements to this random date, figure out the
numbers from that date to the end of the quarter, and then add additional
quarters until the end of the buyer’s fiscal year.
So in practice, you usually assume a cleaner close date in merger models unless
you need 100% precision for some reason."""
ADVANCED@Merger@"""What is an exchange ratio and when would companies use it in an M&A
deal?"""@"""An exchange ratio is an alternate way of structuring a 100% stock M&A deal, or
any M&A deal with a portion of stock involved.
Let’s say you were going to buy a company for $100 million in a 100% stock deal.
Normally you would determine the number of shares to issue by dividing the
$100 million by the buyer’s stock price.
With an exchange ratio, by contrast, you would tie the number of new shares to
the buyer’s own shares – so the seller might receive 1.5 shares of the buyer’s
shares for each of its shares, rather than shares worth a specific dollar amount.
Buyers might prefer to do this if they believe their stock price is going to decline
post-transaction – sellers, on the other hand, would prefer a fixed dollar amount
in stock unless they believe the buyer’s share price will rise after the transaction."""
ADVANCED@Merger@"""Isn’t there still some risk with an exchange ratio? If the stock price swings
wildly in one direction or the other, the effective purch"""@"""Yes. You can use something called a collar, which guarantees a certain price
based on the range of the buyer’s stock price to the seller’s stock price. Here’s an
example:
Suppose that we had a 100% stock deal with a 1.5x exchange ratio, i.e. the seller
receives 1.5 of the buyer’s shares for each 1 of its own shares. The buyer’s share
price is $20.00 and the seller has 1,000 shares outstanding. Right now, it’s worth
$30,000 (1,000 * 1.5 * $20.00) to the seller. Here’s how we could set up a collar:
• If the buyer’s share price falls below $20.00 per share, the seller still
receives the equivalent of $20.00 per buyer share in value. So if the buyer’s
share price falls to $15.00, now the seller would receive 2,000 shares
instead.
• If the buyer’s share price is between $20.00 and $40.00 per share, the
normal 1.5x exchange ratio is used. So the value could be anything from
$30,000 to $60,000.
• If the buyer’s share price goes above $40.00 per share, the seller can only
receive the equivalent of $40.00 per buyer share in value. So if the buyer’s
share price rises to $80.00, the seller would receive only 750 shares instead.
Collar structures are not terribly common in M&A deals, but they are useful for
reducing risk on both sides when stock is involved."""
ADVANCED@Merger@"""Walk me through the most important terms of a Purchase Agreement in an
M&A deal."""@"""There are dozens, but here are the most important points:
• Purchase Price: Stated as a per-share amount for public companies; just a
number (the Equity Purchase Price) for private companies
• Form of Consideration: Cash, Stock, Debt…
• Transaction Structure: Stock, Asset, or 338(h)(10)
• Treatment of Options: Assumed by the buyer? Cashed out? Ignored?
• Employee Retention: Do employees have to sign non-solicit or non-
compete agreements? What about management?
• Reps & Warranties: What must the buyer and seller claim is true about
their respective businesses?
• No-Shop / Go-Shop: Can the seller “shop” this offer around and try to get
a better deal, or must it stay exclusive to this buyer?"""
ADVANCED@Merger@"""What’s an Earnout and why would a buyer offer it to a seller in an M&A
deal?"""@"""An Earnout is a form of “deferred payment” in an M&A deal – it’s most common
with private companies and start-ups, and it is highly unusual for public sellers.
It is usually contingent on financial performance or other goals – for example, the
buyer might say, “We’ll pay you an additional $10 million in 3 years if you can
hit $100 million in revenue by then.”
Buyers use it to incentivize sellers to continue to perform well and to discourage
management teams from taking the money and running off to an island in the
South Pacific once the deal is done."""
ADVANCED@Merger@"""Normally we create Goodwill because we pay more for a company than
what its Shareholders’ Equity says it’s worth. But what if the opposite happens?
What if we paid $1000 in Cash for a company, but its Assets were worth $2000
and its Liabilities were worth $800?"""@"""First off, you would reverse any new write-ups to Assets to handle this scenario
the easy way, if possible. So if we had Asset Write-Ups of $300 then it would be
easy to simply reverse those and make it so the Assets were only worth $1700,
which would result in positive Goodwill instead.
If it is not possible to do that – e.g. there were no Asset Write-Ups or they cannot
be reversed for some reason – then we need to record a Gain on the Income
Statement for this “Negative Goodwill.
”
In this case, the company’s Shareholders’ Equity is $1200 but we paid $1000 for it,
so we do the following:
Income Statement: Record a Gain of $200, boosting Pre-Tax Income by $200 and
Net Income by $120 at a 40% tax rate.
Cash Flow Statement: Net Income is up by $120, but we subtract the Gain of
$200, so Cash is down by $80 so far. Under CFI we record the $1000 acquisition,
so Cash at the bottom is down by $1080.
Balance Sheet: Cash is down by $1080. But we have $2000 of new Assets, so the
Assets side is up by $920. On the other side, Liabilities is up by $800 and
Shareholders’ Equity is up by $120 due to the increased Net Income, so both
sides are up by $920 and balance."""
ADVANCED@Merger@"""What if Shareholders’ Equity is negative?"""@"""Nothing is different. You still wipe it out, allocate the purchase price, and create
Goodwill."""
ADVANCED@Merger@"""How would an accretion / dilution model be different for a private seller?"""@"""The mechanics are the same, but the transaction structure is more likely to be an
Asset Purchase or 338(h)(10) Election; private sellers also don’t have Earnings Per
Share so you would only project down to Net Income on the seller’s Income
Statement.
Note that accretion / dilution makes no sense if you have a private buyer because
private companies do not have Earnings Per Share."""
ADVANCED@Merger@"""Explain what a contribution analysis is and why we might look at it in a
merger model."""@"""A contribution analysis compares how much Revenue, EBITDA, Pre-Tax Income,
Cash, and possibly other items the buyer and seller are “contributing” to
estimate what the ownership of the combined company should be.
Example: Let’s say that the buyer is set to own 50% of the new company and that
the seller will own 50%. But the buyer has $100 million of revenue and the seller
has $50 million of revenue – a contribution analysis would tell us that the buyer
“should” own 66% instead because it’s contributing 2/3 of the combined revenue.
It’s most common to look at this with merger of equals scenarios, and less
common when the buyer is significantly larger than the seller."""
ADVANCED@Merger@"""How would I calculate “break-even synergies” in an M&A deal and what
does the number mean?"""@"""To do this, you would set the EPS accretion / dilution to $0.00 and then back-
solve in Excel to get the required synergies to make the deal neutral to EPS.
It’s important because you want an idea of whether or not a deal “works”
mathematically, and a high number for the break-even synergies tells you that
you’re going to need a lot of cost savings or revenue synergies to make it work."""
ADVANCED@Merger@"""Normally in an accretion / dilution model you care most about combining
both companies’ Income Statements and Balance Sheets. But let’s say I want to
combine all 3 financial statements – how would I do this?"""@"""1. Always combine the buyer’s and seller’s Balance Sheets first (remember to
wipe out the seller’s Shareholders’ Equity).
2. Make the necessary Pro-Forma Adjustments (cash, debt, stock,
goodwill/intangibles, etc.).
3. Project the combined Balance Sheet using standard assumptions for each
item (see the Accounting section of the guide).
4. Combine and project the Income Statement.
5. Then, project the Cash Flow Statement and link everything together as
you normally would with any other 3-statement model. You can usually
just add items together here, but you may eliminate some of the seller’s
investing or financing activities depending on what the buyer wants to do.
You never combine the Income Statement or Cash Flow Statement from before the
acquisition closes. You only look at the combined statements immediately after
the acquisition and into future years."""
ADVANCED@Merger@"""How do you handle options, convertible debt, and other dilutive securities
in a merger model?"""@"""The exact treatment depends on the terms of the Purchase Agreement – the
buyer might assume them or it might allow the seller to “cash them out” if the
per-share purchase price is above the exercise prices of these dilutive securities.
If you assume that they’re exercised, then you calculate dilution to the Equity
Purchase Price in the same way you normally would – the Treasury Stock
Method for options, and the “if converted” method for convertibles."""
ADVANCED@Merger@"""Can you explain what “Pro Forma” numbers are in a merger model?"""@"""This gets confusing because there are contradictory definitions. The simplest one
is that Pro Forma numbers exclude certain non-cash acquisition effects:
• Amortization of Newly Created Intangibles
• Depreciation of PP&E Write-Up
• Deferred Revenue Write-Down
• Amortization of Financing Fees
Some people include all of these, other people include only some of these, and
companies themselves report numbers in different ways. Excluding
Amortization of Intangibles is the most common adjustment here.
While a lot of companies report numbers this way, the concept itself is flawed
and inconsistent because companies themselves already include existing non-
cash charges like Depreciation, Amortization, and Stock-Based Compensation.
To make things even more confusing, some people will also add back some or all
of those items as well."""
ADVANCED@Merger@"""If you’re looking at a reverse merger (i.e. a private company acquires a
public company), how would the merger model be different?"""@"""Mechanically, it’s similar because you still allocate purchase price, combine and
adjust the Balance Sheets, and combine the Income Statements, including
acquisition effects.
The difference is that accretion / dilution is not meaningful if it’s a private
company because it doesn’t have an EPS number; so you would place more
weight on a contribution analysis, or even on something like the IRR of the
acquisition."""
BASIC@Accounting@"""Walk me through the 3 financial statements."""@"""“The 3 major financial statements are the Income Statement, Balance Sheet and Cash Flow Statement.
The Income Statement gives the company’s revenue and expenses, and goes down to Net Income, the final line on the statement.
The Balance Sheet shows the company’s Assets – its resources – such as Cash, Inventory and PP&E, as well as its Liabilities – such as Debt and Accounts Payable – and Shareholders’ Equity. Assets must equal Liabilities plus Shareholders’ Equity.
The Cash Flow Statement begins with Net Income, adjusts for non-cash expenses and working capital changes, and then lists cash flow from investing and financing activities; at the end, you see the company’s net change in cash.”"""
BASIC@Accounting@"""Can you give examples of major line items on each of the financial statements?"""@"""Income Statement: Revenue; Cost of Goods Sold; SG&A (Selling, General &
Administrative Expenses); Operating Income; Pretax Income; Net Income.
Balance Sheet: Cash; Accounts Receivable; Inventory; Plants, Property & Equipment (PP&E); Accounts Payable; Accrued Expenses; Debt; Shareholders’ Equity.
Cash Flow Statement: Net Income; Depreciation & Amortization; Stock-Based Compensation; Changes in Operating Assets & Liabilities; Cash Flow From Operations; Capital Expenditures; Cash Flow From Investing; Sale/Purchase of Securities; Dividends Issued; Cash Flow From Financing."""
BASIC@Accounting@"""How do the 3 statements link together?"""@"""“To tie the statements together, Net Income from the Income Statement flows into Shareholders’ Equity on the Balance Sheet, and into the top line of the Cash Flow Statement.
Changes to Balance Sheet items appear as working capital changes on the Cash Flow Statement, and investing and financing activities affect Balance Sheet items such as PP&E, Debt and Shareholders’ Equity. The Cash and Shareholders’ Equity items on the Balance Sheet act as “plugs,” with Cash flowing in from the final line on the Cash Flow Statement.”"""
BASIC@Accounting@"""If I were stranded on a desert island, only had 1 statement and I wanted to review the overall health of a company – which statement would I use and why?"""@"""You would use the Cash Flow Statement because it gives a true picture of how much cash the company is actually generating, independent of all the non-cash expenses you might have. And that’s the #1 thing you care about when analyzing the overall financial health of any business – its cash flow."""
BASIC@Accounting@"""Let’s say I could only look at 2 statements to assess a company’s prospects – which 2 would I use and why?"""@"""You would pick the Income Statement and Balance Sheet, because you can create the Cash Flow Statement from both of those (assuming, of course that you have “before” and “after” versions of the Balance Sheet that correspond to the same period the Income Statement is tracking)."""
BASIC@Accounting@"""Walk me through how Depreciation going up by $10 would affect the statements."""@"""Income Statement: Operating Income would decline by $10 and assuming a 40% tax rate, Net Income would go down by $6.
Cash Flow Statement: The Net Income at the top goes down by $6, but the $10 Depreciation is a non-cash expense that gets added back, so overall Cash Flow from Operations goes up by $4. There are no changes elsewhere, so the overall Net Change in Cash goes up by $4.
Balance Sheet: Plants, Property & Equipment goes down by $10 on the Assets side because of the Depreciation, and Cash is up by $4 from the changes on the Cash Flow Statement.
Overall, Assets is down by $6. Since Net Income fell by $6 as well, Shareholders’ Equity on the Liabilities & Shareholders’ Equity side is down by $6 and both sides of the Balance Sheet balance.
Note: With this type of question I always recommend going in the order:
1. Income Statement
2. Cash Flow Statement
3. Balance Sheet
This is so you can check yourself at the end and make sure the Balance Sheet balances. Remember that an Asset going up decreases your Cash Flow, whereas a Liability going
up increases your Cash Flow."""
BASIC@Accounting@"""If Depreciation is a non-cash expense, why does it affect the cash balance?"""@"""Although Depreciation is a non-cash expense, it is tax-deductible. Since taxes are a cash expense, Depreciation affects cash by reducing the amount of taxes you pay."""
BASIC@Accounting@"""Where does Depreciation usually show up on the Income Statement?"""@"""It could be in a separate line item, or it could be embedded in Cost of Goods Sold or Operating Expenses – every company does it differently. Note that the end result for accounting questions is the same: Depreciation always reduces Pre-Tax Income."""
BASIC@Accounting@"""What happens when Accrued Compensation goes up by $10?"""@"""For this question, confirm that the accrued compensation is now being recognized as an expense (as opposed to just changing non-accrued to accrued compensation).
Assuming that’s the case, Operating Expenses on the Income Statement go up by $10, Pre-Tax Income falls by $10, and Net Income falls by $6 (assuming a 40% tax rate).
On the Cash Flow Statement, Net Income is down by $6, and Accrued Compensation will increase Cash Flow by $10, so overall Cash Flow from Operations is up by $4 and the Net Change in Cash at the bottom is up by $4.
On the Balance Sheet, Cash is up by $4 as a result, so Assets are up by $4. On the Liabilities & Equity side, Accrued Compensation is a liability so Liabilities are up by $10 and Retained Earnings are down by $6 due to the Net Income, so both sides balance."""
BASIC@Accounting@"""What happens when Inventory goes up by $10, assuming you pay for it with cash?"""@"""No changes to the Income Statement.
On the Cash Flow Statement, Inventory is an asset so that decreases your Cash Flow from Operations – it goes down by $10, as does the Net Change in Cash at the bottom.
On the Balance Sheet under Assets, Inventory is up by $10 but Cash is down by $10, so the changes cancel out and Assets still equals Liabilities & Shareholders’ Equity."""
BASIC@Accounting@"""Why is the Income Statement not affected by changes in Inventory?"""@"""This is a common interview mistake – incorrectly stating that Working Capital changes show up on the Income Statement.
In the case of Inventory, the expense is only recorded when the goods associated with it are sold – so if it’s just sitting in a warehouse, it does not count as a Cost of Good Sold or Operating Expense until the company manufactures it into a product and sells it."""
BASIC@Accounting@""" Let’s say Apple is buying $100 worth of new iPod factories with debt. How are all 3 statements affected at the start of “Year 1,” before anything else happens?"""@"""At the start of “Year 1,” before anything else has happened, there would be no changes on Apple’s Income Statement (yet).
On the Cash Flow Statement, the additional investment in factories would show up under Cash Flow from Investing as a net reduction in Cash Flow (so Cash Flow is down by $100 so far). And the additional $100 worth of debt raised would show up as an addition to Cash Flow, canceling out the investment activity. So the cash number stays the same.
On the Balance Sheet, there is now an additional $100 worth of factories in the Plants, Property & Equipment line, so PP&E is up by $100 and Assets is therefore up by $100. On the other side, debt is up by $100 as well and so both sides balance."""
BASIC@Accounting@"""Now let’s go out 1 year, to the start of Year 2. Assume the debt is high-yield so no principal is paid off, and assume an interest rate of 10%. Also assume the factories depreciate at a rate of 10% per year. What happens?"""@"""After a year has passed, Apple must pay interest expense and must record the depreciation.
Operating Income would decrease by $10 due to the 10% depreciation charge each year, and the $10 in additional Interest Expense would decrease the Pre-Tax Income by $20 altogether ($10 from the depreciation and $10 from Interest Expense).
Assuming a tax rate of 40%, Net Income would fall by $12.
On the Cash Flow Statement, Net Income at the top is down by $12. Depreciation is a non-cash expense, so you add it back and the end result is that Cash Flow from Operations is down by $2.
That’s the only change on the Cash Flow Statement, so overall Cash is down by $2.
On the Balance Sheet, under Assets, Cash is down by $2 and PP&E is down by $10 due to the depreciation, so overall Assets are down by $12.
On the other side, since Net Income was down by $12, Shareholders’ Equity is also down by $12 and both sides balance.
Remember, the debt number under Liabilities does not change since we’ve assumed none of the debt is actually paid back."""
BASIC@Accounting@"""At the start of Year 3, the factories all break down and the value of the equipment is written down to $0. The loan must also be paid back now. Walk me through the 3 statements."""@"""After 2 years, the value of the factories is now $80 if we go with the 10% depreciation per year assumption. It is this $80 that we will write down in the 3 statements.
First, on the Income Statement, the $80 write-down shows up in the Pre-Tax Income line. With a 40% tax rate, Net Income declines by $48.
On the Cash Flow Statement, Net Income is down by $48 but the write-down is a non- cash expense, so we add it back – and therefore Cash Flow from Operations increases by $32.
There are no changes under Cash Flow from Investing, but under Cash Flow from Financing there is a $100 charge for the loan payback – so Cash Flow from Investing falls by $100.
Overall, the Net Change in Cash falls by $68.
On the Balance Sheet, Cash is now down by $68 and PP&E is down by $80, so Assets have decreased by $148 altogether.
On the other side, Debt is down $100 since it was paid off, and since Net Income was down by $48, Shareholders’ Equity is down by $48 as well. Altogether, Liabilities & Shareholders’ Equity are down by $148 and both sides balance."""
BASIC@Accounting@"""Now let’s look at a different scenario and assume Apple is ordering $10 of additional iPod inventory, using cash on hand. They order the inventory, but they have not manufactured or sold anything yet – what happens to the 3 statements?"""@"""No changes to the Income Statement.
Cash Flow Statement – Inventory is up by $10, so Cash Flow from Operations decreases by $10. There are no further changes, so overall Cash is down by $10.
On the Balance Sheet, Inventory is up by $10 and Cash is down by $10 so the Assets number stays the same and the Balance Sheet remains in balance."""
BASIC@Accounting@"""Now let’s say they sell the iPods for revenue of $20, at a cost of $10. Walk me through the 3 statements under this scenario."""@"""Income Statement: Revenue is up by $20 and COGS is up by $10, so Gross Profit is up by $10 and Operating Income is up by $10 as well. Assuming a 40% tax rate, Net Income is up by $6.
Cash Flow Statement: Net Income at the top is up by $6 and Inventory has decreased by $10 (since we just manufactured the inventory into real iPods), which is a net addition to cash flow – so Cash Flow from Operations is up by $16 overall.
These are the only changes on the Cash Flow Statement, so Net Change in Cash is up by $16.
On the Balance Sheet, Cash is up by $16 and Inventory is down by $10, so Assets is up by $6 overall.
On the other side, Net Income was up by $6 so Shareholders’ Equity is up by $6 and both sides balance."""
BASIC@Accounting@"""Could you ever end up with negative shareholders’ equity? What does it mean?"""@"""Yes. It is common to see this in 2 scenarios:
1. Leveraged Buyouts with dividend recapitalizations – it means that the owner of the company has taken out a large portion of its equity (usually in the form of cash), which can sometimes turn the number negative.
2. It can also happen if the company has been losing money consistently and therefore has a declining Retained Earnings balance, which is a portion of Shareholders’ Equity.
It doesn’t “mean” anything in particular, but it can be a cause for concern and possibly demonstrate that the company is struggling (in the second scenario).
Note: Shareholders’ equity never turns negative immediately after an LBO – it would only happen following a dividend recap or continued net losses."""
BASIC@Accounting@"""What is working capital? How is it used?"""@"""Working Capital = Current Assets – Current Liabilities.
If it’s positive, it means a company can pay off its short-term liabilities with its short- term assets. It is often presented as a financial metric and its magnitude and sign (negative or positive) tells you whether or not the company is “sound.”
Bankers look at Operating Working Capital more commonly in models, and that is defined as (Current Assets – Cash & Cash Equivalents) – (Current Liabilities – Debt)."""
BASIC@Accounting@"""What does negative Working Capital mean? Is that a bad sign?"""@"""Not necessarily. It depends on the type of company and the specific situation – here are a few different things it could mean:
1. Some companies with subscriptions or longer-term contracts often have negative Working Capital because of high Deferred Revenue balances.
2. Retail and restaurant companies like Amazon, Wal-Mart, and McDonald’s often have negative Working Capital because customers pay upfront – so they can use the cash generated to pay off their Accounts Payable rather than keeping a large cash balance on-hand. This can be a sign of business efficiency.
3. In other cases, negative Working Capital could point to financial trouble or possible bankruptcy (for example, when customers don’t pay quickly and upfront and the company is carrying a high debt balance)."""
BASIC@Accounting@"""Recently, banks have been writing down their assets and taking huge quarterly losses. Walk me through what happens on the 3 statements when there’s a write- down of $100."""@"""First, on the Income Statement, the $100 write-down shows up in the Pre-Tax Income line. With a 40% tax rate, Net Income declines by $60.
On the Cash Flow Statement, Net Income is down by $60 but the write-down is a non- cash expense, so we add it back – and therefore Cash Flow from Operations increases by $40.
Overall, the Net Change in Cash rises by $40.
On the Balance Sheet, Cash is now up by $40 and an asset is down by $100 (it’s not clear which asset since the question never stated the specific asset to write-down). Overall, the Assets side is down by $60.
On the other side, since Net Income was down by $60, Shareholders’ Equity is also down by $60 – and both sides balance."""
BASIC@Accounting@"""Walk me through a $100 “bailout” of a company and how it affects the 3 statements."""@"""First, confirm what type of “bailout” this is – Debt? Equity? A combination? The most common scenario here is an equity investment from the government, so here’s what happens:
No changes to the Income Statement. On the Cash Flow Statement, Cash Flow from Financing goes up by $100 to reflect the government’s investment, so the Net Change in Cash is up by $100.
On the Balance Sheet, Cash is up by $100 so Assets are up by $100; on the other side, Shareholders’ Equity would go up by $100 to make it balance."""
BASIC@Accounting@"""Walk me through a $100 write-down of debt – as in OWED debt, a liability – on a company’s balance sheet and how it affects the 3 statements."""@"""This is counter-intuitive. When a liability is written down you record it as a gain on the Income Statement (with an asset write-down, it’s a loss) – so Pre-Tax Income goes up by $100 due to this write-down. Assuming a 40% tax rate, Net Income is up by $60.
On the Cash Flow Statement, Net Income is up by $60, but we need to subtract that debt write-down – so Cash Flow from Operations is down by $40, and Net Change in Cash is down by $40.
On the Balance Sheet, Cash is down by $40 so Assets are down by $40. On the other side, Debt is down by $100 but Shareholders’ Equity is up by $60 because the Net Income was up by $60 – so Liabilities & Shareholders’ Equity is down by $40 and it balances.
If this seems strange to you, you’re not alone – see this Forbes article for more on why writing down debt actually benefits companies accounting-wise:
http://www.forbes.com/2009/07/31/fair-value-accounting-markets-equities-fasb.html"""
BASIC@Accounting@"""When would a company collect cash from a customer and not record it as revenue?"""@"""Three examples come to mind:
1. Web-based subscription software
2. Cell phone carriers that cell annual contracts
3. Magazine publishers that sell subscriptions
Companies that agree to services in the future often collect cash upfront to ensure stable revenue – this makes investors happy as well since they can better predict a company’s performance.
Per the rules of GAAP (Generally Accepted Accounting Principles), you only record revenue when you actually perform the services – so the company would not record everything as revenue right away."""
BASIC@Accounting@"""If cash collected is not recorded as revenue, what happens to it?"""@"""Usually it goes into the Deferred Revenue balance on the Balance Sheet under Liabilities.
Over time, as the services are performed, the Deferred Revenue balance “turns into” real revenue on the Income Statement."""
BASIC@Accounting@"""What’s the difference between accounts receivable and deferred revenue?"""@"""Accounts receivable has not yet been collected in cash from customers, whereas deferred revenue has been. Accounts receivable represents how much revenue the company is waiting on, whereas deferred revenue represents how much it is waiting to record as revenue."""
BASIC@Accounting@"""How long does it usually take for a company to collect its accounts receivable balance?"""@"""Generally the accounts receivable days are in the 40-50 day range, though it’s higher for companies selling high-end items and it might be lower for smaller, lower transaction- value companies."""
BASIC@Accounting@"""What’s the difference between cash-based and accrual accounting?"""@"""Cash-based accounting recognizes revenue and expenses when cash is actually received or paid out; accrual accounting recognizes revenue when collection is reasonably certain (i.e. after a customer has ordered the product) and recognizes expenses when they are incurred rather than when they are paid out in cash.
Most large companies use accrual accounting because paying with credit cards and lines of credit is so prevalent these days; very small businesses may use cash-based accounting to simplify their financial statements."""
BASIC@Accounting@"""Let’s say a customer pays for a TV with a credit card. What would this look like under cash-based vs. accrual accounting?"""@"""In cash-based accounting, the revenue would not show up until the company charges the customer’s credit card, receives authorization, and deposits the funds in its bank account – at which point it would show up as both Revenue on the Income Statement and Cash on the Balance Sheet.
In accrual accounting, it would show up as Revenue right away but instead of appearing in Cash on the Balance Sheet, it would go into Accounts Receivable at first. Then, once the cash is actually deposited in the company’s bank account, it would “turn into” Cash."""
BASIC@Accounting@"""How do you decide when to capitalize rather than expense a purchase?"""@"""If the asset has a useful life of over 1 year, it is capitalized (put on the Balance Sheet rather than shown as an expense on the Income Statement). Then it is depreciated (tangible assets) or amortized (intangible assets) over a certain number of years.
Purchases like factories, equipment and land all last longer than a year and therefore show up on the Balance Sheet. Employee salaries and the cost of manufacturing products (COGS) only cover a short period of operations and therefore show up on the Income Statement as normal expenses instead."""
BASIC@Accounting@""" Why do companies report both GAAP and non-GAAP (or “Pro Forma”) earnings?"""@"""These days, many companies have “non-cash” charges such as Amortization of Intangibles, Stock-Based Compensation, and Deferred Revenue Write-down in their Income Statements. As a result, some argue that Income Statements under GAAP no longer reflect how profitable most companies truly are. Non-GAAP earnings are almost always higher because these expenses are excluded."""
BASIC@Accounting@"""A company has had positive EBITDA for the past 10 years, but it recently went bankrupt. How could this happen?"""@"""Several possibilities:
1. The company is spending too much on Capital Expenditures – these are not reflected at all in EBITDA, but it could still be cash-flow negative.
2. The company has high interest expense and is no longer able to afford its debt.
3. The company’s debt all matures on one date and it is unable to refinance it due to
a “credit crunch” – and it runs out of cash completely when paying back the debt.
4. It has significant one-time charges (from litigation, for example) and those are
high enough to bankrupt the company.
Remember, EBITDA excludes investment in (and depreciation of) long-term assets, interest and one-time charges – and all of these could end up bankrupting the company."""
BASIC@Accounting@"""Normally Goodwill remains constant on the Balance Sheet – why would it be impaired and what does Goodwill Impairment mean?"""@"""Usually this happens when a company has been acquired and the acquirer re-assesses its intangible assets (such as customers, brand, and intellectual property) and finds that they are worth significantly less than they originally thought.
It often happens in acquisitions where the buyer “overpaid” for the seller and can result in a large net loss on the Income Statement (see: eBay/Skype).
It can also happen when a company discontinues part of its operations and must impair the associated goodwill."""
BASIC@Accounting@"""Under what circumstances would Goodwill increase?"""@"""Technically Goodwill can increase if the company re-assesses its value and finds that it is worth more, but that is rare. What usually happens is 1 of 2 scenarios:
1. The company gets acquired or bought out and Goodwill changes as a result, since it’s an accounting “plug” for the purchase price in an acquisition.
2. The company acquires another company and pays more than what its assets are worth – this is then reflected in the Goodwill number."""
ADVANCED@Accounting@"""How is GAAP accounting different from tax accounting?"""@"""1. GAAP is accrual-based but tax is cash-based.
2. GAAP uses straight-line depreciation or a few other methods whereas tax
accounting is different (accelerated depreciation).
3. GAAP is more complex and more accurately tracks assets/liabilities whereas tax
accounting is only concerned with revenue/expenses in the current period and what income tax you owe."""
ADVANCED@Accounting@"""What are deferred tax assets/liabilities and how do they arise?"""@"""They arise because of temporary differences between what a company can deduct for cash tax purposes vs. what they can deduct for book tax purposes.
Deferred Tax Liabilities arise when you have a tax expense on the Income Statement but haven’t actually paid that tax in cold, hard cash yet; Deferred Tax Assets arise when you pay taxes in cash but haven’t expensed them on the Income Statement yet.
The most common way they occur is with asset write-ups and write-downs in M&A deals – an asset write-up will produce a deferred tax liability while a write-down will produce a deferred tax asset (see the Merger Model section for more on this)."""
ADVANCED@Accounting@"""Walk me through how you create a revenue model for a company."""@"""There are 2 ways you could do this: a bottoms-up build and a tops-down build.
• Bottoms-Up: Start with individual products / customers, estimate the average sale value or customer value, and then the growth rate in sales and sale values to tie everything together.
• Tops-Down: Start with “big-picture” metrics like overall market size, then estimate the company’s market share and how that will change in coming years, and multiply to get to their revenue.
Of these two methods, bottoms-up is more common and is taken more seriously because estimating “big-picture” numbers is almost impossible."""
ADVANCED@Accounting@"""Walk me through how you create an expense model for a company."""@"""To do a true bottoms-up build, you start with each different department of a company, the # of employees in each, the average salary, bonuses, and benefits, and then make assumptions on those going forward.
Usually you assume that the number of employees is tied to revenue, and then you assume growth rates for salary, bonuses, benefits, and other metrics.
Cost of Goods Sold should be tied directly to Revenue and each “unit” produced should incur an expense.
Other items such as rent, Capital Expenditures, and miscellaneous expenses are either linked to the company’s internal plans for building expansion plans (if they have them), or to Revenue for a more simple model."""
ADVANCED@Accounting@"""Let’s say we’re trying to create these models but don’t have enough information or the company doesn’t tell us enough in its filings – what do we do?"""@"""Use estimates. For the revenue if you don’t have enough information to look at separate product lines or divisions of the company, you can just assume a simple growth rate into future years.
For the expenses, if you don’t have employee-level information then you can just assume that major expenses like SG&A are a percent of revenue and carry that assumption forward."""
ADVANCED@Accounting@"""Walk me through the major items in Shareholders’ Equity."""@"""Common items include:
• Common Stock – Simply the par value of however much stock the company has issued.
• Retained Earnings – How much of the company’s Net Income it has “saved up” over time.
• Additional Paid in Capital – This keeps track of how much stock-based compensation has been issued and how much new stock employees exercising options have created. It also includes how much over par value a company raises in an IPO or other equity offering.
• Treasury Stock – The dollar amount of shares that the company has bought back.
• Accumulated Other Comprehensive Income – This is a “catch-all” that includes
other items that don’t fit anywhere else, like the effect of foreign currency exchange rates changing."""
ADVANCED@Accounting@"""Walk me through what flows into Retained Earnings."""@"""Retained Earnings = Old Retained Earnings Balance + Net Income – Dividends Issued
If you’re calculating Retained Earnings for the current year, take last year’s Retained Earnings number, add this year’s Net Income, and subtract however much the company paid out in dividends."""
ADVANCED@Accounting@"""Walk me through what flows into Additional Paid-In Capital (APIC)."""@"""APIC = Old APIC + Stock-Based Compensation + Stock Created by Option Exercises
If you’re calculating it, take the balance from last year, add this year’s stock-based compensation number, and then add in however much new stock was created by employees exercising options this year."""
ADVANCED@Accounting@"""What is the Statement of Shareholders’ Equity and why do we use it?"""@"""This statement shows everything we went through above – the major items that comprise Shareholders’ Equity, and how we arrive at each of them using the numbers elsewhere in the statement.
You don’t use it too much, but it can be helpful for analyzing companies with unusual stock-based compensation and stock option situations."""
ADVANCED@Accounting@"""What are examples of non-recurring charges we need to add back to a company’s EBIT / EBITDA when looking at its financial statements?"""@"""• Restructuring Charges
• Goodwill Impairment
• Asset Write-Downs
• Bad Debt Expenses
• Legal Expenses
• Disaster Expenses
• Change in Accounting Procedures
Note that to be an “add-back” or “non-recurring” charge for EBITDA / EBIT purposes, it needs to affect Operating Income on the Income Statement. So if you have one of these charges “below the line” then you do not add it back for the EBITDA / EBIT calculation.
Also note that you do add back Depreciation, Amortization, and sometimes Stock-Based Compensation for EBITDA / EBIT, but that these are not “non-recurring charges” because all companies have them every year – these are just non-cash charges."""
ADVANCED@Accounting@"""How do you project Balance Sheet items like Accounts Receivable and Accrued Expenses in a 3-statement model?"""@"""Normally you make very simple assumptions here and assume these are percentages of revenue, operating expenses, or cost of goods sold. Examples:
• Accounts Receivable: % of revenue.
• Deferred Revenue: % of revenue.
• Accounts Payable: % of COGS.
• Accrued Expenses: % of operating expenses or SG&A.
Then you either carry the same percentages across in future years or assume slight changes depending on the company."""
ADVANCED@Accounting@"""How should you project Depreciation & Capital Expenditures?"""@"""The simple way: project each one as a % of revenue or previous PP&E balance.
The more complex way: create a PP&E schedule that splits out different assets by their useful lives, assumes straight-line depreciation over each asset’s useful life, and then assumes capital expenditures based on what the company has invested historically."""
ADVANCED@Accounting@"""How do Net Operating Losses (NOLs) affect a company’s 3 statements?"""@"""The “quick and dirty” way to do this: reduce the Taxable Income by the portion of the NOLs that you can use each year, apply the same tax rate, and then subtract that new Tax number from your old Pretax Income number (which should stay the same).
The way you should do this: create a book vs. cash tax schedule where you calculate the Taxable Income based on NOLs, and then look at what you would pay in taxes without the NOLs. Then you book the difference as an increase to the Deferred Tax Liability on the Balance Sheet.
This method reflects the fact that you’re saving on cash flow – since the DTL, a liability, is rising – but correctly separates the NOL impact into book vs. cash taxes."""
ADVANCED@Accounting@"""What’s the difference between capital leases and operating leases?"""@"""Operating leases are used for short-term leasing of equipment and property, and do not involve ownership of anything. Operating lease expenses show up as operating expenses on the Income Statement.
Capital leases are used for longer-term items and give the lessee ownership rights; they depreciate and incur interest payments, and are counted as debt.
A lease is a capital lease if any one of the following 4 conditions is true:
1. If there’s a transfer of ownership at the end of the term.
2. If there’s an option to purchase the asset at a bargain price at the end of the term.
3. If the term of the lease is greater than 75% of the useful life of the asset.
4. If the present value of the lease payments is greater than 90% of the asset’s fair
market value."""
ADVANCED@Accounting@"""Why would the Depreciation & Amortization number on the Income Statement be different from what’s on the Cash Flow Statement?"""@"""This happens if D&A is embedded in other Income Statement line items. When this happens, you need to use the Cash Flow Statement number to arrive at EBITDA because otherwise you’re undercounting D&A."""
BASIC@EV@"""Why do we look at both Enterprise Value and Equity Value?"""@"""Enterprise Value represents the value of the company that is attributable to all investors; Equity Value only represents the portion available to shareholders (equity investors). You look at both because Equity Value is the number the public-at-large sees, while Enterprise Value represents its true value."""
BASIC@EV@"""When looking at an acquisition of a company, do you pay more attention to Enterprise or Equity Value?"""@"""Enterprise Value, because that’s how much an acquirer really “pays” and includes the often mandatory debt repayment."""
BASIC@EV@"""What’s the formula for Enterprise Value?"""@"""EV = Equity Value + Debt + Preferred Stock + Minority Interest - Cash
(This formula does not tell the whole story and can get more complex – see the Advanced Questions. Most of the time you can get away with stating this formula in an interview, though)."""
BASIC@EV@"""Why do you need to add Minority Interest to Enterprise Value?"""@"""Whenever a company owns over 50% of another company, it is required to report the financial performance of the other company as part of its own performance.
So even though it doesn’t own 100%, it reports 100% of the majority-owned subsidiary’s financial performance.
In keeping with the “apples-to-apples” theme, you must add Minority Interest to get to Enterprise Value so that your numerator and denominator both reflect 100% of the majority-owned subsidiary."""
BASIC@EV@"""How do you calculate fully diluted shares?"""@"""Take the basic share count and add in the dilutive effect of stock options and any other dilutive securities, such as warrants, convertible debt or convertible preferred stock.
To calculate the dilutive effect of options, you use the Treasury Stock Method (detail on this below)."""
BASIC@EV@"""Let’s say a company has 100 shares outstanding, at a share price of $10 each. It also has 10 options outstanding at an exercise price of $5 each – what is its fully diluted equity value?"""@"""Its basic equity value is $1,000 (100 * $10 = $1,000). To calculate the dilutive effect of the options, first you note that the options are all “in-the-money” – their exercise price is less than the current share price.
When these options are exercised, there will be 10 new shares created – so the share count is now 110 rather than 100.
However, that doesn’t tell the whole story. In order to exercise the options, we had to “pay” the company $5 for each option (the exercise price).
As a result, it now has $50 in additional cash, which it now uses to buy back 5 of the new shares we created.
So the fully diluted share count is 105, and the fully diluted equity value is $1,050."""
BASIC@EV@"""Let’s say a company has 100 shares outstanding, at a share price of $10 each. It also has 10 options outstanding at an exercise price of $15 each – what is its fully diluted equity value?"""@"""$1,000. In this case the options’ exercise price is above the current share price, so they have no dilutive effect."""
BASIC@EV@"""Why do you subtract cash in the formula for Enterprise Value? Is that always accurate?"""@"""The “official” reason: Cash is subtracted because it’s considered a non-operating asset and because Equity Value implicitly accounts for it.
The way I think about it: In an acquisition, the buyer would “get” the cash of the seller, so it effectively pays less for the company based on how large its cash balance is. Remember, Enterprise Value tells us how much you’d really have to “pay” to acquire another company.
It’s not always accurate because technically you should be subtracting only excess cash – the amount of cash a company has above the minimum cash it requires to operate."""
BASIC@EV@"""Is it always accurate to add Debt to Equity Value when calculating Enterprise Value?"""@"""In most cases, yes, because the terms of a debt agreement usually say that debt must be refinanced in an acquisition. And in most cases a buyer will pay off a seller’s debt, so it is accurate to say that any debt “adds” to the purchase price.
However, there could always be exceptions where the buyer does not pay off the debt. These are rare and I’ve personally never seen it, but once again “never say never” applies."""
BASIC@EV@"""Could a company have a negative Enterprise Value? What would that mean?"""@"""Yes. It means that the company has an extremely large cash balance, or an extremely low market capitalization (or both). You see it with:
1. Companies on the brink of bankruptcy.
2. Financial institutions, such as banks, that have large cash balances.
These days, there’s a lot of overlap in these 2 categories..."""
BASIC@EV@"""Could a company have a negative Equity Value? What would that mean?"""@"""No. This is not possible because you cannot have a negative share count and you cannot have a negative share price."""
BASIC@EV@"""Why do we add Preferred Stock to get to Enterprise Value?"""@"""Preferred Stock pays out a fixed dividend, and preferred stock holders also have a higher claim to a company’s assets than equity investors do. As a result, it is seen as more similar to debt than common stock."""
BASIC@EV@"""How do you account for convertible bonds in the Enterprise Value formula?"""@"""If the convertible bonds are in-the-money, meaning that the conversion price of the bonds is below the current share price, then you count them as additional dilution to the Equity Value; if they’re out-of-the-money then you count the face value of the convertibles as part of the company’s Debt."""
BASIC@EV@"""A company has 1 million shares outstanding at a value of $100 per share. It also has $10 million of convertible bonds, with par value of $1,000 and a conversion price of $50. How do I calculate diluted shares outstanding?"""@"""This gets confusing because of the different units involved. First, note that these convertible bonds are in-the-money because the company’s share price is $100, but the conversion price is $50. So we count them as additional shares rather than debt.
Next, we need to divide the value of the convertible bonds – $10 million – by the par value – $1,000 – to figure out how many individual bonds we get:
$10 million / $1,000 = 10,000 convertible bonds.
Next, we need to figure out how many shares this number represents. The number of shares per bond is the par value divided by the conversion price:
$1,000 / $50 = 20 shares per bond.
So we have 200,000 new shares (20 * 10,000) created by the convertibles, giving us 1.2 million diluted shares outstanding.
We do not use the Treasury Stock Method with convertibles because the company is not “receiving” any cash from us."""
BASIC@EV@"""What’s the difference between Equity Value and Shareholders’ Equity?"""@"""Equity Value is the market value and Shareholders’ Equity is the book value. Equity
Value can never be negative because shares outstanding and share prices can never be
negative, whereas Shareholders’ Equity could be any value. For healthy companies, Equity Value usually far exceeds Shareholders’ Equity."""
ADVANCED@EV@"""Are there any problems with the Enterprise Value formula you just gave me?"""@"""Yes – it’s too simple. There are lots of other things you need to add into the formula with real companies:
• Net Operating Losses – Should be valued and arguably added in, similar to cash.
• Long-Term Investments – These should be counted, similar to cash.
• Equity Investments – Any investments in other companies should also be added
in, similar to cash (though they might be discounted).
• Capital Leases – Like debt, these have interest payments – so they should be
added in like debt.
• (Some) Operating Leases – Sometimes you need to convert operating leases to
capital leases and add them as well.
• Pension Obligations – Sometimes these are counted as debt as well.
So a more “correct” formula would be Enterprise Value = Equity Value – Cash + Debt + Preferred Stock + Minority Interest – NOLs – Investments + Capital Leases + Pension Obligations...
In interviews, usually you can get away with saying “Enterprise Value = Equity Value – Cash + Debt + Preferred Stock + Minority Interest”
I mention this here because in more advanced interviews you might get questions on this topic."""
ADVANCED@EV@"""Should you use the book value or market value of each item when calculating Enterprise Value?"""@"""Technically, you should use market value for everything. In practice, however, you usually use market value only for the Equity Value portion, because it’s almost
impossible to establish market values for the rest of the items in the formula – so you just take the numbers from the company’s Balance Sheet."""
ADVANCED@EV@"""What percentage dilution in Equity Value is “too high?”"""@"""There’s no strict “rule” here but most bankers would say that anything over 10% is odd. If your basic Equity Value is $100 million and the diluted Equity Value is $115 million, you might want to check your calculations – it’s not necessarily wrong, but over 10% dilution is unusual for most companies."""
BASIC@Valuation@"""What are the 3 major valuation methodologies?"""@"""Comparable Companies, Precedent Transactions and Discounted Cash Flow Analysis."""
BASIC@Valuation@"""Rank the 3 valuation methodologies from highest to lowest expected value."""@"""Trick question – there is no ranking that always holds. In general, Precedent Transactions will be higher than Comparable Companies due to the Control Premium built into acquisitions.
Beyond that, a DCF could go either way and it’s best to say that it’s more variable than other methodologies. Often it produces the highest value, but it can produce the lowest value as well depending on your assumptions."""
BASIC@Valuation@"""When would you not use a DCF in a Valuation?"""@"""You do not use a DCF if the company has unstable or unpredictable cash flows (tech or bio-tech startup) or when debt and working capital serve a fundamentally different role. For example, banks and financial institutions do not re-invest debt and working capital is a huge part of their Balance Sheets – so you wouldn’t use a DCF for such companies."""
BASIC@Valuation@"""What other Valuation methodologies are there?"""@"""Other methodologies include:
• Liquidation Valuation – Valuing a company’s assets, assuming they are sold off and then subtracting liabilities to determine how much capital, if any, equity investors receive
• Replacement Value – Valuing a company based on the cost of replacing its assets
• LBO Analysis – Determining how much a PE firm could pay for a company to hit a
“target” IRR, usually in the 20-25% range
• Sum of the Parts – Valuing each division of a company separately and adding them together at the end
• M&A Premiums Analysis – Analyzing M&A deals and figuring out the premium that each buyer paid, and using this to establish what your company is worth
• Future Share Price Analysis – Projecting a company’s share price based on the P / E multiples of the public company comparables, then discounting it back to its present value"""
BASIC@Valuation@"""When would you use a Liquidation Valuation?"""@"""This is most common in bankruptcy scenarios and is used to see whether equity shareholders will receive any capital after the company’s debts have been paid off. It is often used to advise struggling businesses on whether it’s better to sell off assets separately or to try and sell the entire company."""
BASIC@Valuation@"""When would you use Sum of the Parts?"""@"""This is most often used when a company has completely different, unrelated divisions – a conglomerate like General Electric, for example.
If you have a plastics division, a TV and entertainment division, an energy division, a consumer financing division and a technology division, you should not use the same set of Comparable Companies and Precedent Transactions for the entire company.
Instead, you should use different sets for each division, value each one separately, and then add them together to get the Combined Value."""
BASIC@Valuation@"""When do you use an LBO Analysis as part of your Valuation?"""@"""Obviously you use this whenever you’re looking at a Leveraged Buyout – but it is also used to establish how much a private equity firm could pay, which is usually lower than what companies will pay.
It is often used to set a “floor” on a possible Valuation for the company you’re looking at."""
BASIC@Valuation@"""What are the most common multiples used in Valuation?"""@"""The most common multiples are EV/Revenue, EV/EBITDA, EV/EBIT, P/E (Share Price / Earnings per Share), and P/BV (Share Price / Book Value)."""
BASIC@Valuation@"""What are some examples of industry-specific multiples?"""@"""Technology (Internet): EV / Unique Visitors, EV / Pageviews
Retail / Airlines: EV / EBITDAR (Earnings Before Interest, Taxes, Depreciation, Amortization & Rent)
Energy: P / MCFE, P / MCFE / D (MCFE = 1 Million Cubic Foot Equivalent, MCFE/D = MCFE per Day), P / NAV (Share Price / Net Asset Value)
Real Estate Investment Trusts (REITs): Price / FFO, Price / AFFO (Funds From Operations, Adjusted Funds From Operations)
Technology and Energy should be straightforward – you’re looking at traffic and energy reserves as value drivers rather than revenue or profit.
For Retail / Airlines, you often remove Rent because it is a major expense and one that varies significantly between different types of companies.
For REITs, Funds From Operations is a common metric that adds back Depreciation and subtracts gains on the sale of property. Depreciation is a non-cash yet extremely large expense in real estate, and gains on sales of properties are assumed to be non-recurring, so FFO is viewed as a “normalized” picture of the cash flow the REIT is generating."""
BASIC@Valuation@"""When you’re looking at an industry-specific multiple like EV / Scientists or EV / Subscribers, why do you use Enterprise Value rather than Equity Value?"""@"""You use Enterprise Value because those scientists or subscribers are “available” to all the investors (both debt and equity) in a company. The same logic doesn’t apply to everything, though – you need to think through the multiple and see which investors the particular metric is “available” to."""
BASIC@Valuation@"""Would an LBO or DCF give a higher valuation?"""@"""Technically it could go either way, but in most cases the LBO will give you a lower valuation.
Here’s the easiest way to think about it: with an LBO, you do not get any value from the cash flows of a company in between Year 1 and the final year – you’re only valuing it based on its terminal value.
With a DCF, by contrast, you’re taking into account both the company’s cash flows in between and its terminal value, so values tend to be higher.
Note: Unlike a DCF, an LBO model by itself does not give a specific valuation. Instead, you set a desired IRR and determine how much you could pay for the company (the valuation) based on that."""
BASIC@Valuation@"""How would you present these Valuation methodologies to a company or its investors?"""@"""Usually you use a “football field” chart where you show the valuation range implied by each methodology. You always show a range rather than one specific number.
As an example, see page 10 of this document (a Valuation done by Credit Suisse for the Leveraged Buyout of Sungard Data Systems in 2005):
http://edgar.sec.gov/Archives/edgar/data/789388/000119312505074184/dex99c2.htm"""
BASIC@Valuation@"""How would you value an apple tree?"""@"""The same way you would value a company: by looking at what comparable apple trees are worth (relative valuation) and the value of the apple tree’s cash flows (intrinsic valuation).
Yes, you could do a DCF for anything – even an apple tree."""
BASIC@Valuation@"""Why can’t you use Equity Value / EBITDA as a multiple rather than Enterprise Value / EBITDA?"""@"""EBITDA is available to all investors in the company – rather than just equity holders. Similarly, Enterprise Value is also available to all shareholders so it makes sense to pair them together.
Equity Value / EBITDA, however, is comparing apples to oranges because Equity Value does not reflect the company’s entire capital structure – only the part available to equity investors."""
BASIC@Valuation@"""When would a Liquidation Valuation produce the highest value?"""@"""This is highly unusual, but it could happen if a company had substantial hard assets but the market was severely undervaluing it for a specific reason (such as an earnings miss or cyclicality).
As a result, the company’s Comparable Companies and Precedent Transactions would likely produce lower values as well – and if its assets were valued highly enough, Liquidation Valuation might give a higher value than other methodologies."""
BASIC@Valuation@"""Let’s go back to 2004 and look at Facebook back when it had no profit and no revenue. How would you value it?"""@"""You would use Comparable Companies and Precedent Transactions and look at more “creative” multiples such as EV/Unique Visitors and EV/Pageviews rather than EV/Revenue or EV/EBITDA.
You would not use a “far in the future DCF” because you can’t reasonably predict cash flows for a company that is not even making money yet.
This is a very common wrong answer given by interviewees. When you can’t predict cash flow, use other metrics – don’t try to predict cash flow anyway!"""
BASIC@Valuation@"""What would you use in conjunction with Free Cash Flow multiples – Equity Value or Enterprise Value?"""@"""Trick question. For Unlevered Free Cash Flow, you would use Enterprise Value, but for Levered Free Cash Flow you would use Equity Value.
Remember, Unlevered Free Cash Flow excludes Interest and thus represents money available to all investors, whereas Levered already includes Interest and the money is therefore only available to equity investors.
Debt investors have already “been paid” with the interest payments they received."""
BASIC@Valuation@"""You never use Equity Value / EBITDA, but are there any cases where you might use Equity Value / Revenue?"""@"""Never say never. It’s very rare to see this, but sometimes large financial institutions with big cash balances have negative Enterprise Values – so you might use Equity Value / Revenue instead.
You might see Equity Value / Revenue if you’ve listed a set of financial and non- financial companies on a slide, you’re showing Revenue multiples for the non-financial companies, and you want to show something similar for the financials.
Note, however, that in most cases you would be using other multiples such as P/E and P/BV with banks anyway."""
BASIC@Valuation@"""How do you select Comparable Companies / Precedent Transactions?"""@"""The 3 main ways to select companies and transactions:
1. Industry classification
2. Financial criteria (Revenue, EBITDA, etc.)
3. Geography
For Precedent Transactions, you often limit the set based on date and only look at transactions within the past 1-2 years.
The most important factor is industry – that is always used to screen for companies/transactions, and the rest may or may not be used depending on how specific you want to be.
Here are a few examples:
Comparable Company Screen: Oil & gas producers with market caps over $5 billion
Comparable Company Screen: Digital media companies with over $100 million in revenue
Precedent Transaction Screen: Airline M&A transactions over the past 2 years involving sellers with over $1 billion in revenue
Precedent Transaction Screen: Retail M&A transactions over the past year"""
BASIC@Valuation@"""How do you apply the 3 valuation methodologies to actually get a value for the
company you’re looking at?"""@"""Sometimes this simple fact gets lost in discussion of Valuation methodologies. You take the median multiple of a set of companies or transactions, and then multiply it by the relevant metric from the company you’re valuing.
Example: If the median EBITDA multiple from your set of Precedent Transactions is 8x and your company’s EBITDA is $500 million, the implied Enterprise Value would be $4 billion.
To get the “football field” valuation graph you often see, you look at the minimum, maximum, 25th percentile and 75th percentile in each set as well and create a range of values based on each methodology."""
BASIC@Valuation@"""What do you actually use a valuation for?"""@"""Usually you use it in pitch books and in client presentations when you’re providing updates and telling them what they should expect for their own valuation.
It’s also used right before a deal closes in a Fairness Opinion, a document a bank creates that “proves” the value their client is paying or receiving is “fair” from a financial point of view.
Valuations can also be used in defense analyses, merger models, LBO models, DCFs (because terminal multiples are based off of comps), and pretty much anything else in finance."""
BASIC@Valuation@"""Why would a company with similar growth and profitability to its Comparable Companies be valued at a premium?"""@"""This could happen for a number of reasons:
• The company has just reported earnings well-above expectations and its stock price has risen recently.
• It has some type of competitive advantage not reflected in its financials, such as a key patent or other intellectual property.
• It has just won a favorable ruling in a major lawsuit.
• It is the market leader in an industry and has greater market share than its
competitors."""
BASIC@Valuation@"""What are the flaws with public company comparables?"""@"""• No company is 100% comparable to another company.
• The stock market is “emotional” – your multiples might be dramatically higher
or lower on certain dates depending on the market’s movements.
• Share prices for small companies with thinly-traded stocks may not reflect their
full value."""
BASIC@Valuation@"""How do you take into account a company’s competitive advantage in a valuation?"""@"""1. Look at the 75th percentile or higher for the multiples rather than the Medians.
2. Add in a premium to some of the multiples.
3. Use more aggressive projections for the company.
In practice you rarely do all of the above – these are just possibilities."""
BASIC@Valuation@"""Do you ALWAYS use the median multiple of a set of public company comparables or precedent transactions?"""@"""There’s no “rule” that you have to do this, but in most cases you do because you want to use values from the middle range of the set. But if the company you’re valuing is distressed, is not performing well, or is at a competitive disadvantage, you might use the 25th percentile or something in the lower range instead – and vice versa if it’s doing well."""
BASIC@Valuation@"""You mentioned that Precedent Transactions usually produce a higher value than Comparable Companies – can you think of a situation where this is not the case?"""@"""Sometimes this happens when there is a substantial mismatch between the M&A market and the public market. For example, no public companies have been acquired recently but there have been a lot of small private companies acquired at extremely low valuations.
For the most part this generalization is true but keep in mind that there are exceptions to almost every “rule” in finance."""
BASIC@Valuation@"""What are some flaws with precedent transactions?"""@"""• Past transactions are rarely 100% comparable – the transaction structure, size of the company, and market sentiment all have huge effects.
• Data on precedent transactions is generally more difficult to find than it is for public company comparables, especially for acquisitions of small private companies."""
BASIC@Valuation@"""Two companies have the exact same financial profile and are bought by the same acquirer, but the EBITDA multiple for one transaction is twice the multiple of the other transaction – how could this happen?"""@"""Possible reasons:
1. One process was more competitive and had a lot more companies bidding on the target.
2. One company had recent bad news or a depressed stock price so it was acquired at a discount.
3. They were in industries with different median multiples."""
BASIC@Valuation@"""Why does Warren Buffett prefer EBIT multiples to EBITDA multiples?"""@"""Warren Buffett once famously said, ""Does management think the tooth fairy pays for capital expenditures?”
He dislikes EBITDA because it excludes the often sizable Capital Expenditures companies make and hides how much cash they are actually using to finance their operations.
In some industries there is also a large gap between EBIT and EBITDA – anything that is very capital-intensive, for example, will show a big disparity."""
BASIC@Valuation@"""The EV / EBIT, EV / EBITDA, and P / E multiples all measure a company’s profitability. What’s the difference between them, and when do you use each one?"""@"""P / E depends on the company’s capital structure whereas EV / EBIT and EV / EBITDA are capital structure-neutral. Therefore, you use P / E for banks, financial institutions, and other companies where interest payments / expenses are critical.
EV / EBIT includes Depreciation & Amortization whereas EV / EBITDA excludes it – you’re more likely to use EV / EBIT in industries where D&A is large and where capital expenditures and fixed assets are important (e.g. manufacturing), and EV / EBITDA in industries where fixed assets are less important and where D&A is comparatively smaller (e.g. Internet companies)."""
BASIC@Valuation@""" If you were buying a vending machine business, would you pay a higher multiple for a business where you owned the machines and they depreciated normally, or one in which you leased the machines? The cost of depreciation and lease are the same dollar amounts and everything else is held constant."""@"""You would pay more for the one where you lease the machines. Enterprise Value would be the same for both companies, but with the depreciated situation the charge is not reflected in EBITDA – so EBITDA is higher, and the EV / EBITDA multiple is lower as a result. For the leased situation, the lease would show up in SG&A so it would be reflected in EBITDA, making EBITDA lower and the EV / EBITDA multiple higher."""
BASIC@Valuation@"""How do you value a private company?"""@"""You use the same methodologies as with public companies: public company comparables, precedent transactions, and DCF. But there are some differences:
• You might apply a 10-15% (or more) discount to the public company comparable multiples because the private company you’re valuing is not as “liquid” as the public comps.
• You can’t use a premiums analysis or future share price analysis because a private company doesn’t have a share price.
• Your valuation shows the Enterprise Value for the company as opposed to the implied per-share price as with public companies.
• A DCF gets tricky because a private company doesn’t have a market capitalization or Beta – you would probably just estimate WACC based on the public comps’ WACC rather than trying to calculate it."""
BASIC@Valuation@"""Let’s say we’re valuing a private company. Why might we discount the public company comparable multiples but not the precedent transaction multiples?"""@"""There’s no discount because with precedent transactions, you’re acquiring the entire company – and once it’s acquired, the shares immediately become illiquid.
But shares – the ability to buy individual “pieces” of a company rather than the whole thing – can be either liquid (if it’s public) or illiquid (if it’s private).
Since shares of public companies are always more liquid, you would discount public company comparable multiples to account for this."""
BASIC@Valuation@"""Can you use private companies as part of your valuation?"""@"""Only in the context of precedent transactions – it would make no sense to include them for public company comparables or as part of the Cost of Equity / WACC calculation in a DCF because they are not public and therefore have no values for market cap or Beta."""
ADVANCED@Valuation@"""How do you value banks and financial institutions differently from other companies?"""@"""You mostly use the same methodologies, except:
• You look at P / E and P / BV (Book Value) multiples rather than EV / Revenue, EV / EBITDA, and other “normal” multiples, since banks have unique capital structures.
• You pay more attention to bank-specific metrics like NAV (Net Asset Value) and you might screen companies and precedent transactions based on those instead.
• Rather than a DCF, you use a Dividend Discount Model (DDM) which is similar but is based on the present value of the company’s dividends rather than its free cash flows.
You need to use these methodologies and multiples because interest is a critical component of a bank’s revenue and because debt is part of its business model rather than just a way to finance acquisitions or expand the business."""
ADVANCED@Valuation@"""Walk me through an IPO valuation for a company that’s about to go public."""@"""1. Unlike normal valuations, for an IPO valuation we only care about public company comparables.
2. After picking the public company comparables we decide on the most relevant multiple to use and then estimate our company’s Enterprise Value based on that.
3. Once we have the Enterprise Value, we work backward to get to Equity Value and also subtract the IPO proceeds because this is “new” cash.
4. Then we divide by the total number of shares (old and newly created) to get its per-share price. When people say “An IPO priced at...” this is what they’re referring to.
If you were using P / E or any other “Equity Value-based multiple” for the multiple in step #2 here, then you would get to Equity Value instead and then subtract the IPO proceeds from there."""
ADVANCED@Valuation@""" I’m looking at financial data for a public company comparable, and it’s April (Q2) right now. Walk me through how you would “calendarize” this company’s financial statements to show the Trailing Twelve Months as opposed to just the last Fiscal Year."""@"""The “formula” to calendarize financial statements is as follows:
TTM = Most Recent Fiscal Year + New Partial Period – Old Partial Period
So in the example above, we would take the company’s Q1 numbers, add the most recent fiscal year’s numbers, and then subtract the Q1 numbers from that most recent fiscal year.
For US companies you can find these quarterly numbers in the 10-Q; for international companies they’re in the “interim” reports."""
ADVANCED@Valuation@"""Walk me through an M&A premiums analysis."""@"""The purpose of this analysis is to look at similar transactions and see the premiums that buyers have paid to sellers’ share prices when acquiring them. For example, if a company is trading at $10.00/share and the buyer acquires it for $15.00/share, that’s a 50% premium.
1. First, select the precedent transactions based on industry, date (past 2-3 years for example), and size (example: over $1 billion market cap).
2. For each transaction, get the seller’s share price 1 day, 20 days, and 60 days before the transaction was announced (you can also look at even longer intervals, or 30 days, 45 days, etc.).
3. Then, calculate the 1-day premium, 20-day premium, etc. by dividing the per- share purchase price by the appropriate share prices on each day.
4. Get the medians for each set, and then apply them to your company’s current share price, share price 20 days ago, etc. to estimate how much of a premium a buyer might pay for it.
Note that you only use this analysis when valuing public companies because private companies don’t have share prices. Sometimes the set of companies here is exactly the same as your set of precedent transactions but typically it is broader."""
ADVANCED@Valuation@"""Walk me through a future share price analysis."""@"""The purpose of this analysis is to project what a company’s share price might be 1 or 2
years from now and then discount it back to its present value.
1. Get the median historical (usually TTM) P / E of your public company comparables.
2. Apply this P / E multiple to your company’s 1-year forward or 2-year forward projected EPS to get its implied future share price.
3. Then, discount this back to its present value by using a discount rate in-line with the company’s Cost of Equity figures.
You normally look at a range of P / E multiples as well as a range of discount rates for this type of analysis, and make a sensitivity table with these as inputs."""
ADVANCED@Valuation@"""Both M&A premiums analysis and precedent transactions involve looking at previous M&A transactions. What’s the difference in how we select them?"""@"""• All the sellers in the M&A premiums analysis must be public.
• Usually we use a broader set of transactions for M&A premiums – we might use
fewer than 10 precedent transactions but we might have dozens of M&A
premiums. The industry and financial screens are usually less stringent.
• Aside from those, the screening criteria is similar – financial, industry, geography,
and date."""
ADVANCED@Valuation@"""Walk me through a Sum-of-the-Parts analysis."""@"""In a Sum-of-the-Parts analysis, you value each division of a company using separate comparables and transactions, get to separate multiples, and then add up each division’s value to get the total for the company. Example:
We have a manufacturing division with $100 million EBITDA, an entertainment division with $50 million EBITDA and a consumer goods division with $75 million EBITDA. We’ve selected comparable companies and transactions for each division, and the
median multiples come out to 5x EBITDA for manufacturing, 8x EBITDA for entertainment, and 4x EBITDA for consumer goods.
Our calculation would be $100 * 5x + $50 * 8x + $75 * 4x = $1.2 billion for the company’s total value."""
ADVANCED@Valuation@"""How do you value Net Operating Losses and take them into account in a valuation?"""@"""You value NOLs based on how much they’ll save the company in taxes in future years, and then take the present value of the sum of tax savings in future years. Two ways to assess the tax savings in future years:
1. Assume that a company can use its NOLs to completely offset its taxable income until the NOLs run out.
2. In an acquisition scenario, use Section 382 and multiply the adjusted long-term rate (http://pmstax.com/afr/exemptAFR.shtml) by the equity purchase price of the seller to determine the maximum allowed NOL usage in each year – and then use that to figure out the offset to taxable income.
You might look at NOLs in a valuation but you rarely add them in – if you did, they would be similar to cash and you would subtract NOLs to go from Equity Value to Enterprise Value, and vice versa."""
ADVANCED@Valuation@""" I have a set of public company comparables and need to get the projections from equity research. How do I select which report to use?"""@"""This varies by bank and group, but two common methods:
1. You pick the report with the most detailed information.
2. You pick the report with numbers in the middle of the range.
Note that you do not pick reports based on which bank they’re coming from. So if you’re at Goldman Sachs, you would not pick all Goldman Sachs equity research – in fact that would be bad because then your valuation would not be objective."""
ADVANCED@Valuation@"""I have a set of precedent transactions but I’m missing information like EBITDA for a lot of the companies – how can I find it if it’s not available via public sources?"""@"""1. Search online and see if you can find press releases or articles in the financial press with these numbers.
2. Failing that, look in equity research for the buyer around the time of the transaction and see if any of the analysts estimate the seller’s numbers.
3. Also look on online sources like Capital IQ and Factset and see if any of them disclose numbers or give estimates."""
ADVANCED@Valuation@"""How far back and forward do we usually go for public company comparable and precedent transaction multiples?"""@"""Usually you look at the TTM (Trailing Twelve Months) period for both sets, and then you look forward either 1 or 2 years. You’re more likely to look backward more than 1 year and go forward more than 2 years for public company comparables; for precedent transactions it’s odd to go forward more than 1 year because your information is more limited."""
ADVANCED@Valuation@"""I have one company with a 40% EBITDA margin trading at 8x EBITDA, and another company with a 10% EBITDA margin trading at 16x EBITDA. What’s the problem with comparing these two valuations directly?"""@"""There’s no “rule” that says this is wrong or not allowed, but it can be misleading to compare companies with dramatically different margins. Due to basic arithmetic, the 40% margin company will usually have a lower multiple – whether or not its actual value is lower.
In this situation, we might consider screening based on margins and remove the outliers – you would never try to “normalize” the EBITDA multiples based on margins."""
ADVANCED@Valuation@"""Walk me through how we might value an oil & gas company and how it’s different from a “standard” company."""@"""You use the same methodologies, except:
• You look at industry-specific multiples like P / MCFE and P / NAV in addition to the more standard ones.
• You need to project the prices of commodities like oil and natural gas, and also the company’s reserves to determine its revenue and cash flows in future years.
• Rather than a DCF, you use a NAV (Net Asset Value) model – it’s similar, but everything flows from the company’s reserves rather than simple revenue growth / EBITDA margin projections.
In addition to all of the above, there are also some accounting complications with energy companies and you need to think about what a “proven” reserve is vs. what is more speculative."""
ADVANCED@Valuation@"""Walk me through how we would value a REIT (Real Estate Investment Trust) and how it differs from a “normal” company."""@"""Similar to energy, real estate is asset-intensive and a company’s value depends on how much cash flow specific properties generate.
• You look at Price / FFO (Funds From Operations) and Price / AFFO (Adjusted Funds From Operations), which add back Depreciation and subtract gains on property sales; NAV (Net Asset Value) is also important.
• You value properties by dividing Net Operating Income (NOI) (Property’s Gross Income – Operating Expenses) by the capitalization rate (based on market data).
• Replacement Valuation is more common because you can actually estimate the cost of buying new land and building new properties.
• A DCF is still a DCF, but it flows from specific properties and it might be useless depending on what kind of company you’re valuing."""
BASIC@DCF@"""Walk me through a DCF."""@"""“A DCF values a company based on the Present Value of its Cash Flows and the Present Value of its Terminal Value.
First, you project out a company’s financials using assumptions for revenue growth, expenses and Working Capital; then you get down to Free Cash Flow for each year, which you then sum up and discount to a Net Present Value, based on your discount rate – usually the Weighted Average Cost of Capital.
Once you have the present value of the Cash Flows, you determine the company’s Terminal Value, using either the Multiples Method or the Gordon Growth Method, and then also discount that back to its Net Present Value using WACC.
Finally, you add the two together to determine the company’s Enterprise Value.”"""
BASIC@DCF@"""Walk me through how you get from Revenue to Free Cash Flow in the projections."""@"""Subtract COGS and Operating Expenses to get to Operating Income (EBIT). Then, multiply by (1 – Tax Rate), add back Depreciation and other non-cash charges, and subtract Capital Expenditures and the change in Working Capital.
Note: This gets you to Unlevered Free Cash Flow since you went off EBIT rather than EBT. You might want to confirm that this is what the interviewer is asking for."""
BASIC@DCF@"""What’s an alternate way to calculate Free Cash Flow aside from taking Net Income, adding back Depreciation, and subtracting Changes in Operating Assets / Liabilities and CapEx?"""@"""Take Cash Flow From Operations and subtract CapEx – that gets you to Levered Cash Flow. To get to Unlevered Cash Flow, you then need to add back the tax-adjusted Interest Expense and subtract the tax-adjusted Interest Income."""
BASIC@DCF@"""Why do you use 5 or 10 years for DCF projections?"""@"""That’s usually about as far as you can reasonably predict into the future. Less than 5 years would be too short to be useful, and over 10 years is too difficult to predict for most companies."""
BASIC@DCF@""" What do you usually use for the discount rate?"""@"""Normally you use WACC (Weighted Average Cost of Capital), though you might also use Cost of Equity depending on how you’ve set up the DCF."""
BASIC@DCF@"""How do you calculate WACC?"""@"""The formula is: Cost of Equity * (% Equity) + Cost of Debt * (% Debt) * (1 – Tax Rate) + Cost of Preferred * (% Preferred).
In all cases, the percentages refer to how much of the company’s capital structure is taken up by each component.
For Cost of Equity, you can use the Capital Asset Pricing Model (CAPM – see the next question) and for the others you usually look at comparable companies/debt issuances and the interest rates and yields issued by similar companies to get estimates."""
BASIC@DCF@"""How do you calculate the Cost of Equity?"""@"""Cost of Equity = Risk-Free Rate + Beta * Equity Risk Premium
The risk-free rate represents how much a 10-year or 20-year US Treasury should yield; Beta is calculated based on the “riskiness” of Comparable Companies and the Equity Risk Premium is the % by which stocks are expected to out-perform “risk-less” assets.
Normally you pull the Equity Risk Premium from a publication called Ibbotson’s. Note: This formula does not tell the whole story. Depending on the bank and how
precise you want to be, you could also add in a “size premium” and “industry
premium” to account for how much a company is expected to out-perform its peers is according to its market cap or industry.
Small company stocks are expected to out-perform large company stocks and certain industries are expected to out-perform others, and these premiums reflect these expectations."""
BASIC@DCF@"""How do you get to Beta in the Cost of Equity calculation?"""@"""You look up the Beta for each Comparable Company (usually on Bloomberg), un-lever each one, take the median of the set and then lever it based on your company’s capital structure. Then you use this Levered Beta in the Cost of Equity calculation.
For your reference, the formulas for un-levering and re-levering Beta are below:
Un-Levered Beta = Levered Beta / (1 + ((1 - Tax Rate) x (Total Debt/Equity))) Levered Beta = Un-Levered Beta x (1 + ((1 - Tax Rate) x (Total Debt/Equity)))"""
BASIC@DCF@"""Why do you have to un-lever and re-lever Beta?"""@"""Again, keep in mind our “apples-to-apples” theme. When you look up the Betas on Bloomberg (or from whatever source you’re using) they will be levered to reflect the debt already assumed by each company.
But each company’s capital structure is different and we want to look at how “risky” a company is regardless of what % debt or equity it has.
To get that, we need to un-lever Beta each time.
But at the end of the calculation, we need to re-lever it because we want the Beta used in the Cost of Equity calculation to reflect the true risk of our company, taking into account its capital structure this time."""
BASIC@DCF@"""Would you expect a manufacturing company or a technology company to have a higher Beta?"""@"""A technology company, because technology is viewed as a “riskier” industry than manufacturing."""
BASIC@DCF@"""Let’s say that you use Levered Free Cash Flow rather than Unlevered Free Cash Flow in your DCF – what is the effect?"""@"""Levered Free Cash Flow gives you Equity Value rather than Enterprise Value, since the cash flow is only available to equity investors (debt investors have already been “paid” with the interest payments)."""
BASIC@DCF@"""If you use Levered Free Cash Flow, what should you use as the Discount Rate?"""@"""You would use the Cost of Equity rather than WACC since we’re not concerned with Debt or Preferred Stock in this case – we’re calculating Equity Value, not Enterprise Value."""
BASIC@DCF@"""How do you calculate the Terminal Value?"""@"""You can either apply an exit multiple to the company’s Year 5 EBITDA, EBIT or Free Cash Flow (Multiples Method) or you can use the Gordon Growth method to estimate its value based on its growth rate into perpetuity.
The formula for Terminal Value using Gordon Growth is: Terminal Value = Year 5 Free Cash Flow * (1 + Growth Rate) / (Discount Rate – Growth Rate)."""
BASIC@DCF@"""Why would you use Gordon Growth rather than the Multiples Method to calculate the Terminal Value?"""@"""In banking, you almost always use the Multiples Method to calculate Terminal Value in a DCF. It’s much easier to get appropriate data for exit multiples since they are based on Comparable Companies – picking a long-term growth rate, by contrast, is always a shot in the dark.
However, you might use Gordon Growth if you have no good Comparable Companies or if you have reason to believe that multiples will change significantly in the industry several years down the road. For example, if an industry is very cyclical you might be better off using long-term growth rates rather than exit multiples."""
BASIC@DCF@"""What’s an appropriate growth rate to use when calculating the Terminal Value?"""@"""Normally you use the country’s long-term GDP growth rate, the rate of inflation, or something similarly conservative.
For companies in mature economies, a long-term growth rate over 5% would be quite aggressive since most developed economies are growing at less than 5% per year."""
BASIC@DCF@"""How do you select the appropriate exit multiple when calculating Terminal Value?"""@"""Normally you look at the Comparable Companies and pick the median of the set, or something close to it.
As with almost anything else in finance, you always show a range of exit multiples and what the Terminal Value looks like over that range rather than picking one specific number.
So if the median EBITDA multiple of the set were 8x, you might show a range of values using multiples from 6x to 10x."""
BASIC@DCF@"""Which method of calculating Terminal Value will give you a higher valuation?"""@"""It’s hard to generalize because both are highly dependent on the assumptions you make. In general, the Multiples Method will be more variable than the Gordon Growth method because exit multiples tend to span a wider range than possible long-term growth rates."""
BASIC@DCF@"""What’s the flaw with basing terminal multiples on what public company comparables are trading at?"""@"""The median multiples may change greatly in the next 5-10 years so it may no longer be accurate by the end of the period you’re looking at. This is why you normally look at a wide range of multiples and do a sensitivity to see how the valuation changes over that range.
This method is particularly problematic with cyclical industries (e.g. semiconductors)."""
BASIC@DCF@"""How do you know if your DCF is too dependent on future assumptions?"""@"""The “standard” answer: if significantly more than 50% of the company’s Enterprise Value comes from its Terminal Value, your DCF is probably too dependent on future assumptions.
In reality, almost all DCFs are “too dependent on future assumptions” – it’s actually quite rare to see a case where the Terminal Value is less than 50% of the Enterprise Value.
But when it gets to be in the 80-90% range, you know that you may need to re-think your assumptions..."""
BASIC@DCF@"""Should Cost of Equity be higher for a $5 billion or $500 million market cap company?"""@"""It should be higher for the $500 million company, because all else being equal, smaller companies are expected to outperform large companies in the stock market (and therefore be “more risky”). Using a Size Premium in your calculation would also ensure that Cost of Equity is higher for the $500 million company."""
BASIC@DCF@"""What about WACC – will it be higher for a $5 billion or $500 million company?"""@"""This is a bit of a trick question because it depends on whether or not the capital structure is the same for both companies. If the capital structure is the same in terms of percentages and interest rates and such, then WACC should be higher for the $500 million company for the same reasons as mentioned above.
If the capital structure is not the same, then it could go either way depending on how much debt/preferred stock each one has and what the interest rates are."""
BASIC@DCF@"""What’s the relationship between debt and Cost of Equity?"""@"""More debt means that the company is more risky, so the company’s Levered Beta will be higher – all else being equal, additional debt would raise the Cost of Equity, and less debt would lower the Cost of Equity."""
BASIC@DCF@"""Cost of Equity tells us what kind of return an equity investor can expect for investing in a given company – but what about dividends? Shouldn’t we factor dividend yield into the formula?"""@"""Trick question. Dividend yields are already factored into Beta, because Beta describes returns in excess of the market as a whole – and those returns include dividends."""
BASIC@DCF@"""How can we calculate Cost of Equity WITHOUT using CAPM?"""@"""There is an alternate formula:
Cost of Equity = (Dividends per Share / Share Price) + Growth Rate of Dividends
This is less common than the “standard” formula but sometimes you use it for companies where dividends are more important or when you lack proper information on Beta and the other variables that go into calculating Cost of Equity with CAPM."""
BASIC@DCF@"""Two companies are exactly the same, but one has debt and one does not – which one will have the higher WACC?"""@"""This is tricky – the one without debt will have a higher WACC up to a certain point, because debt is “less expensive” than equity. Why?
• Interest on debt is tax-deductible (hence the (1 – Tax Rate) multiplication in the WACC formula).
• Debt is senior to equity in a company’s capital structure – debt holders would be paid first in a liquidation or bankruptcy.
• Intuitively, interest rates on debt are usually lower than the Cost of Equity numbers you see (usually over 10%). As a result, the Cost of Debt portion of WACC will contribute less to the total figure than the Cost of Equity portion will.
However, the above is true only to a certain point. Once a company’s debt goes up high enough, the interest rate will rise dramatically to reflect the additional risk and so the Cost of Debt would start to increase – if it gets high enough, it might become higher than Cost of Equity and additional debt would increase WACC.
It’s a “U-shape” curve where debt decreases WACC to a point, then starts increasing it."""
BASIC@DCF@"""Which has a greater impact on a company’s DCF valuation – a 10% change in
revenue or a 1% change in the discount rate?"""@"""You should start by saying, “it depends” but most of the time the 10% difference in revenue will have more of an impact. That change in revenue doesn’t affect only the current year’s revenue, but also the revenue/EBITDA far into the future and even the terminal value."""
BASIC@DCF@"""What about a 1% change in revenue vs. a 1% change in the discount rate?"""@"""In this case the discount rate is likely to have a bigger impact on the valuation, though the correct answer should start with, “It could go either way, but most of the time...”"""
BASIC@DCF@"""How do you calculate WACC for a private company?"""@"""This is problematic because private companies don’t have market caps or Betas. In this case you would most likely just estimate WACC based on work done by auditors or valuation specialists, or based on what WACC for comparable public companies is."""
BASIC@DCF@"""What should you do if you don’t believe management’s projections for a DCF model?"""@"""You can take a few different approaches:
• You can create your own projections.
• You can modify management’s projections downward to make them more
conservative.
• You can show a sensitivity table based on different growth rates and margins and
show the values assuming managements’ projections and assuming a more conservative set of numbers.
In reality, you’d probably do all of these if you had unrealistic projections."""
BASIC@DCF@"""Why would you not use a DCF for a bank or other financial institution?"""@"""Banks use debt differently than other companies and do not re-invest it in the business – they use it to create products instead. Also, interest is a critical part of banks’ business models and working capital takes up a huge part of their Balance Sheets – so a DCF for a financial institution would not make much sense.
For financial institutions, it’s more common to use a dividend discount model for valuation purposes."""
BASIC@DCF@"""What types of sensitivity analyses would we look at in a DCF?"""@"""Example sensitivities:
• Revenue Growth vs. Terminal Multiple
• EBITDA Margin vs. Terminal Multiple
• Terminal Multiple vs. Discount Rate
• Long-Term Growth Rate vs. Discount Rate
And any combination of these (except Terminal Multiple vs. Long-Term Growth Rate, which would make no sense)."""
BASIC@DCF@"""A company has a high debt load and is paying off a significant portion of its principal each year. How do you account for this in a DCF?"""@"""Trick question. You don’t account for this at all in a DCF, because paying off debt principal shows up in Cash Flow from Financing on the Cash Flow Statement – but we only go down to Cash Flow from Operations and then subtract Capital Expenditures to get to Free Cash Flow.
If we were looking at Levered Free Cash Flow, then our interest expense would decline in future years due to the principal being paid off – but we still wouldn’t count the principal repayments themselves anywhere."""
ADVANCED@DCF@"""Explain why we would use the mid-year convention in a DCF."""@"""You use it to represent the fact that a company’s cash flow does not come 100% at the end of each year – instead, it comes in evenly throughout each year.
In a DCF without mid-year convention, we would use discount period numbers of 1 for the first year, 2 for the second year, 3 for the third year, and so on.
With mid-year convention, we would instead use 0.5 for the first year, 1.5 for the second year, 2.5 for the third year, and so on."""
ADVANCED@DCF@"""What discount period numbers would I use for the mid-year convention if I have a stub period – e.g. Q4 of Year 1 – in my DCF?"""@"""The rule is that you divide the stub discount period by 2, and then you simply subtract 0.5 from the “normal” discount periods for the future years.
Example for a Q4 stub:
                                                                                             Q4       Year1   Year2   Year3   Year4    Year5 
Normal Discount Periods with Stub:        0.25     1.25       2.25       3.25       4.25       5.25 
Mid-Year Discount Periods with Stub: 0.125     0.75.     1.75.      2.75       3.75       4.75"""
ADVANCED@DCF@"""How does the terminal value calculation change when we use the mid-year convention?"""@"""When you’re discounting the terminal value back to the present value, you use different numbers for the discount period depending on whether you’re using the Multiples Method or Gordon Growth Method:
• Multiples Method: You add 0.5 to the final year discount number to reflect the fact that you’re assuming the company gets sold at the end of the year.
• Gordon Growth Method: You use the final year discount number as is, because you’re assuming the cash flows grow into perpetuity and that they are still received throughout the year rather than just at the end."""
ADVANCED@DCF@"""If I’m working with a public company in a DCF, how do I calculate its per-share value?"""@"""Once you get to Enterprise Value, ADD cash and then subtract debt, preferred stock, and minority interest (and any other debt-like items) to get to Equity Value.
Then, you need to use a circular calculation that takes into account the basic shares outstanding, options, warrants, convertibles, and other dilutive securities. It’s circular because the dilution from these depends on the per-share price – but the per-share price depends on number of shares outstanding, which depends on the per-share price.
To resolve this, you need to enable iterative calculations in Excel so that it can cycle through to find an approximate per-share price."""
ADVANCED@DCF@"""Walk me through a Dividend Discount Model (DDM) that you would use in place of a normal DCF for financial institutions."""@"""The mechanics are the same as a DCF, but we use dividends rather than free cash flows:
1. Project out the company’s earnings, down to earnings per share (EPS).
2. Assume a dividend payout ratio – what percentage of the EPS actually gets paid
out to shareholders in the form of dividends – based on what the firm has done
historically and how much regulatory capital it needs.
3. Use this to calculate dividends over the next 5-10 years.
4. Discount each dividend to its present value based on Cost of Equity – NOT
WACC – and then sum these up.
5. Calculate terminal value based on P / E and EPS in the final year, and then
discount this to its present value based on Cost of Equity.
6. Sum the present value of the terminal value and the present values of the
dividends to get the company’s net present per-share value."""
ADVANCED@DCF@"""When you’re calculating WACC, let’s say that the company has convertible debt. Do you count this as debt when calculating Levered Beta for the company?"""@"""Trick question. If the convertible debt is in-the-money then you do not count it as debt but instead assume that it contributes to dilution, so the company’s Equity Value is higher. If it’s out-of-the-money then you count it as debt and use the interest rate on the convertible for Cost of Debt."""
ADVANCED@DCF@"""We’re creating a DCF for a company that is planning to buy a factory for $100 in cash (no debt or other financing) in Year 4. Currently the present value of its Enterprise Value according to the DCF is $200. How would we change the DCF to account for the factory purchase, and what would our new Enterprise Value be?"""@"""In this scenario, you would add CapEx spending of $100 in year 4 of the DCF, which would reduce Free Cash Flow for that year by $100. The Enterprise Value, in turn, would fall by the present value of that $100 decrease in Free Cash Flow.
The actual math here is messy but you would calculate the present value by dividing $100 by ((1 + Discount Rate)^4) – the “4” just represents year 4 here. Then you would subtract this amount from the Enterprise Value."""
BASIC@Merger@"""Walk me through a basic merger model."""@"""“A merger model is used to analyze the financial profiles of 2 companies, the purchase price and how the purchase is made, and determines whether the buyer’s EPS increases or decreases.
Step 1 is making assumptions about the acquisition – the price and whether it was cash, stock or debt or some combination of those. Next, you determine the valuations and shares outstanding of the buyer and seller and project out an Income Statement for each one.
Finally, you combine the Income Statements, adding up line items such as Revenue and Operating Expenses, and adjusting for Foregone Interest on Cash and Interest Paid on Debt in the Combined Pre-Tax Income line; you apply the buyer’s Tax Rate to get the Combined Net Income, and then divide by the new share count to determine the combined EPS.”"""
BASIC@Merger@"""What’s the difference between a merger and an acquisition?"""@"""There’s always a buyer and a seller in any M&A deal – the difference between “merger” and “acquisition” is more semantic than anything. In a merger the companies are close to the same size, whereas in an acquisition the buyer is significantly larger."""
BASIC@Merger@"""Why would a company want to acquire another company?"""@"""Several possible reasons:
• The buyer wants to gain market share by buying a competitor.
• The buyer needs to grow more quickly and sees an acquisition as a way to do that.
• The buyer believes the seller is undervalued.
• The buyer wants to acquire the seller’s customers so it can up-sell and cross-sell to
them.
• The buyer thinks the seller has a critical technology, intellectual property or some
other “secret sauce” it can use to significantly enhance its business.
• The buyer believes it can achieve significant synergies and therefore make the deal
accretive for its shareholders."""
BASIC@Merger@"""Why would an acquisition be dilutive?"""@"""An acquisition is dilutive if the additional amount of Net Income the seller contributes is not enough to offset the buyer’s foregone interest on cash, additional interest paid on debt, and the effects of issuing additional shares.
Acquisition effects – such as amortization of intangibles – can also make an acquisition dilutive."""
BASIC@Merger@"""Is there a rule of thumb for calculating whether an acquisition will be accretive or dilutive?"""@"""If the deal involves just cash and debt, you can sum up the interest expense for debt and the foregone interest on cash, then compare it against the seller’s Pre-Tax Income.
And if it’s an all-stock deal you can use a shortcut to assess whether it is accretive (see question #5).
But if the deal involves cash, stock, and debt, there’s no quick rule-of-thumb you can use unless you’re lightning fast with mental math."""
BASIC@Merger@"""A company with a higher P/E acquires one with a lower P/E – is this accretive or dilutive?"""@"""Trick question. You can’t tell unless you also know that it’s an all-stock deal. If it’s an all-cash or all-debt deal, the P/E multiples of the buyer and seller don’t matter because no stock is being issued.
Sure, generally getting more earnings for less is good and is more likely to be accretive but there’s no hard-and-fast rule unless it’s an all-stock deal."""
BASIC@Merger@"""What is the rule of thumb for assessing whether an M&A deal will be accretive or dilutive?"""@"""In an all-stock deal, if the buyer has a higher P/E than the seller, it will be accretive; if the buyer has a lower P/E, it will be dilutive.
On an intuitive level if you’re paying more for earnings than what the market values your own earnings at, you can guess that it will be dilutive; and likewise, if you’re paying less for earnings than what the market values your own earnings at, you can guess that it would be accretive."""
BASIC@Merger@"""What are the complete effects of an acquisition?"""@"""1. Foregone Interest on Cash – The buyer loses the Interest it would have otherwise earned if it uses cash for the acquisition.
2. Additional Interest on Debt – The buyer pays additional Interest Expense if it uses debt.
3. Additional Shares Outstanding – If the buyer pays with stock, it must issue additional shares.
4. Combined Financial Statements – After the acquisition, the seller’s financials are added to the buyer’s.
5. Creation of Goodwill & Other Intangibles – These Balance Sheet items that represent a “premium” paid to a company’s “fair value” also get created.
Note: There’s actually more than this (see the advanced questions), but this is usually sufficient to mention in interviews."""
BASIC@Merger@"""If a company were capable of paying 100% in cash for another company, why would it choose NOT to do so?"""@"""It might be saving its cash for something else or it might be concerned about running low if business takes a turn for the worst; its stock may also be trading at an all-time high and it might be eager to use that instead (in finance terms this would be “more expensive” but a lot of executives value having a safety cushion in the form of a large cash balance)."""
BASIC@Merger@"""Why would a strategic acquirer typically be willing to pay more for a company than a private equity firm would?"""@"""Because the strategic acquirer can realize revenue and cost synergies that the private equity firm cannot unless it combines the company with a complementary portfolio company. Those synergies boost the effective valuation for the target company."""
BASIC@Merger@"""Why do Goodwill & Other Intangibles get created in an acquisition?"""@"""These represent the value over the “fair market value” of the seller that the buyer has paid. You calculate the number by subtracting the book value of a company from its equity purchase price.
More specifically, Goodwill and Other Intangibles represent things like the value of customer relationships, brand names and intellectual property – valuable, but not true financial Assets that show up on the Balance Sheet."""
BASIC@Merger@"""What is the difference between Goodwill and Other Intangible Assets?"""@"""Goodwill typically stays the same over many years and is not amortized. It changes only if there’s goodwill impairment (or another acquisition).
Other Intangible Assets, by contrast, are amortized over several years and affect the Income Statement by hitting the Pre-Tax Income line.
There’s also a difference in terms of what they each represent, but bankers rarely go into that level of detail – accountants and valuation specialists worry about assigning each one to specific items."""
BASIC@Merger@""" Is there anything else “intangible” besides Goodwill & Other Intangibles that could also impact the combined company?"""@"""Yes. You could also have a Purchased In-Process R&D Write-off and a Deferred Revenue Write-off.
The first refers to any Research & Development projects that were purchased in the acquisition but which have not been completed yet. The logic is that unfinished R&D
projects require significant resources to complete, and as such, the “expense” must be recognized as part of the acquisition.
The second refers to cases where the seller has collected cash for a service but not yet recorded it as revenue, and the buyer must write-down the value of the Deferred Revenue to avoid “double-counting” revenue."""
BASIC@Merger@"""What are synergies, and can you provide a few examples?"""@"""Synergies refer to cases where 2 + 2 = 5 (or 6, or 7...) in an acquisition. Basically, the buyer gets more value than out of an acquisition than what the financials would predict.
There are 2 types: revenue synergies and cost (or expense) synergies.
• Revenue Synergies: The combined company can cross-sell products to new customers or up-sell new products to existing customers. It might also be able to expand into new geographies as a result of the deal.
• Cost Synergies: The combined company can consolidate buildings and administrative staff and can lay off redundant employees. It might also be able to shut down redundant stores or locations."""
BASIC@Merger@"""How are synergies used in merger models?"""@"""Revenue Synergies: Normally you add these to the Revenue figure for the combined company and then assume a certain margin on the Revenue – this additional Revenue then flows through the rest of the combined Income Statement.
Cost Synergies: Normally you reduce the combined COGS or Operating Expenses by this amount, which in turn boosts the combined Pre-Tax Income and thus Net Income, raising the EPS and making the deal more accretive."""
BASIC@Merger@"""Are revenue or cost synergies more important?"""@"""No one in M&A takes revenue synergies seriously because they’re so hard to predict. Cost synergies are taken a bit more seriously because it’s more straightforward to see how buildings and locations might be consolidated and how many redundant employees might be eliminated.
That said, the chances of any synergies actually being realized are almost 0 so few take them seriously at all."""
BASIC@Merger@"""All else being equal, which method would a company prefer to use when acquiring another company – cash, stock, or debt?"""@"""Assuming the buyer had unlimited resources, it would always prefer to use cash when buying another company. Why?
• Cash is “cheaper” than debt because interest rates on cash are usually under 5% whereas debt interest rates are almost always higher than that. Thus, foregone interest on cash is almost always less than additional interest paid on debt for the same amount of cash/debt.
• Cash is also less “risky” than debt because there’s no chance the buyer might fail to raise sufficient funds from investors.
• It’s hard to compare the “cost” directly to stock, but in general stock is the most “expensive” way to finance a transaction – remember how the Cost of Equity is almost always higher than the Cost of Debt? That same principle applies here.
• Cash is also less risky than stock because the buyer’s share price could change dramatically once the acquisition is announced."""
BASIC@Merger@"""How much debt could a company issue in a merger or acquisition?"""@"""Generally you would look at Comparable Companies/ Precedent Transactions to determine this. You would use the combined company’s LTM (Last Twelve Months) EBITDA figure, find the median Debt/EBITDA ratio of whatever companies you’re looking at, and apply that to your own EBITDA figure to get a rough idea of how much debt you could raise.
You would also look at “Debt Comps” for companies in the same industry and see what types of debt and how many tranches they have used."""
BASIC@Merger@"""How do you determine the Purchase Price for the target company in an acquisition?"""@"""You use the same Valuation methodologies we already discussed. If the seller is a public company, you would pay more attention to the premium paid over the current share price to make sure it’s “sufficient” (generally in the 15-30% range) to win shareholder approval.
For private sellers, more weight is placed on the traditional methodologies."""
BASIC@Merger@"""Let’s say a company overpays for another company – what typically happens afterwards and can you give any recent examples?"""@"""There would be an incredibly high amount of Goodwill & Other Intangibles created if the price is far above the fair market value of the company. Depending on how the acquisition goes, there might be a large goodwill impairment charge later on if the company decides it overpaid.
A recent example is the eBay / Skype deal, in which eBay paid a huge premium and extremely high multiple for Skype. It created excess Goodwill & Other Intangibles, and eBay later ended up writing down much of the value and taking a large quarterly loss as a result."""
BASIC@Merger@"""A buyer pays $100 million for the seller in an all-stock deal, but a day later the market decides it’s only worth $50 million. What happens?"""@"""The buyer’s share price would fall by whatever per-share dollar amount corresponds to the $50 million loss in value. Note that it would not necessarily be cut in half.
Depending on how the deal was structured, the seller would effectively only be receiving half of what it had originally negotiated.
This illustrates one of the major risks of all-stock deals: sudden changes in share price could dramatically impact valuation."""
BASIC@Merger@"""Why do most mergers and acquisitions fail?"""@"""Like so many things, M&A is “easier said than done.” In practice it’s very difficult to acquire and integrate a different company, actually realize synergies and also turn the acquired company into a profitable division.
Many deals are also done for the wrong reasons, such as CEO ego or pressure from shareholders. Any deal done without both parties’ best interests in mind is likely to fail."""
BASIC@Merger@"""What role does a merger model play in deal negotiations?"""@"""The model is used as a sanity check and is used to test various assumptions. A company would never decide to do a deal based on the output of a model.
It might say, “Ok, the model tells us this deal could work and be moderately accretive – it’s worth exploring more.”
It would never say, “Aha! This model predicts 21% accretion – we should definitely acquire them now!”
Emotions, ego and personalities play a far bigger role in M&A (and any type of negotiation) than numbers do."""
BASIC@Merger@"""What types of sensitivities would you look at in a merger model? What variables would you look at?"""@"""The most common variables to look at are Purchase Price, % Stock/Cash/Debt, Revenue Synergies, and Expense Synergies. Sometimes you also look at different operating sensitivities, like Revenue Growth or EBITDA Margin, but it’s more common to build these into your model as different scenarios instead.
You might look at sensitivity tables showing the EPS accretion/dilution at different ranges for the Purchase Price vs. Cost Synergies, Purchase Price vs. Revenue Synergies, or Purchase Price vs. % Cash (and so on)."""
ADVANCED@Merger@"""What’s the difference between Purchase Accounting and Pooling Accounting in an M&A deal?"""@"""In purchase accounting the seller’s shareholders’ equity number is wiped out and the premium paid over that value is recorded as Goodwill on the combined balance sheet post-acquisition. In pooling accounting, you simply combine the 2 shareholders’ equity numbers rather than worrying about Goodwill and the related items that get created.
There are specific requirements for using pooling accounting, so in 99% of M&A deals you will use purchase accounting."""
ADVANCED@Merger@"""Walk me through a concrete example of how to calculate revenue synergies."""@"""“Let’s say that Microsoft is going to acquire Yahoo. Yahoo makes money from search advertising online, and they make a certain amount of revenue per search (RPS). Let’s say this RPS is $0.10 right now. If Microsoft acquired it, we might assume that they could boost this RPS by $0.01 or $0.02 because of their superior monetization. So to calculate the additional revenue from this synergy, we would multiply this $0.01 or $0.02 by Yahoo’s total # of searches, get the total additional revenue, and then select a margin on it to determine how much flows through to the combined company’s Operating Income.”"""
ADVANCED@Merger@"""Walk me through an example of how to calculate expense synergies."""@"""“Let’s say that Microsoft still wants to acquire Yahoo!. Microsoft has 5,000 SG&A-related employees, whereas Yahoo has around 1,000. Microsoft calculates that post-transaction, it will only need about 200 of Yahoo’s SG&A employees, and its existing employees can take over the rest of the work. To calculate the Operating Expenses the combined company would save, we would multiply these 800 employees Microsoft is going to fire post-transaction by their average salary.”"""
ADVANCED@Merger@""" How do you take into account NOLs in an M&A deal?"""@"""You apply Section 382 to determine how much of the seller’s NOLs are usable each year.
Allowable NOLs = Equity Purchase Price * Highest of Past 3 Months’ Adjusted Long Term Rates
So if our equity purchase price were $1 billion and the highest adjusted long-term rate were 5%, then we could use $1 billion * 5% = $50 million of NOLs each year.
If the seller had $250 million in NOLs, then the combined company could use $50 million of them each year for 5 years to offset its taxable income.
You can look at long-term rates right here: http://pmstax.com/afr/exemptAFR.shtml"""
ADVANCED@Merger@"""Why do deferred tax liabilities (DTLs) and deferred tax assets (DTAs) get created in
M&A deals?"""@"""These get created when you write up assets – both tangible and intangible – and when you write down assets in a transaction. An asset write-up creates a deferred tax liability, and an asset write-down creates a deferred tax asset.
You write down and write up assets because their book value – what’s on the balance sheet – often differs substantially from their “fair market value.”
An asset write-up creates a deferred tax liability because you’ll have a higher depreciation expense on the new asset, which means you save on taxes in the short-term – but eventually you’ll have to pay them back, hence the liability. The opposite applies for an asset write-down and a deferred tax asset."""
ADVANCED@Merger@"""How do DTLs and DTAs affect the Balance Sheet Adjustment in an M&A deal?"""@"""You take them into account with everything else when calculating the amount of Goodwill & Other Intangibles to create on your pro-forma balance sheet. The formulas are as follows:
Deferred Tax Asset = Asset Write-Down * Tax Rate
Deferred Tax Liability = Asset Write-Up * Tax Rate
So let’s say you were buying a company for $1 billion with half-cash and half-debt, and you had a $100 million asset write-up and a tax rate of 40%. In addition, the seller has total assets of $200 million, total liabilities of $150 million, and shareholders’ equity of $50 million.
Here’s what would happen to the combined company’s balance sheet (ignoring transaction/financing fees):
• First, you simply add the seller’s Assets and Liabilities (but NOT Shareholders’ Equity – it is wiped out) to the buyer’s to get your “initial” balance sheet. Assets are up by $200 million and Liabilities are down by $150 million.
• Then, Cash on the Assets side goes down by $500 million.
• Debt on the Liabilities & Equity side goes up by $500 million.
• You get a new Deferred Tax Liability of $40 million ($100 million * 40%) on the
Liabilities & Equity side.
• Assets are down by $300 million total and Liabilities & Shareholders’ Equity are
up by $690 million ($500 + $40 + $150).
• So you need Goodwill & Intangibles of $990 million on the Assets side to make
both sides balance."""
ADVANCED@Merger@"""Could you get DTLs or DTAs in an asset purchase?"""@"""No, because in an asset purchase the book basis of assets always matches the tax basis. They get created in a stock purchase because the book values of assets are written up or written down, but the tax values are not."""
ADVANCED@Merger@"""How do you account for DTLs in forward projections in a merger model?"""@"""You create a book vs. cash tax schedule and figure out what the company owes in taxes based on the Pretax Income on its books, and then you determine what it actually pays in cash taxes based on its NOLs and newly created amortization and depreciation expenses (from any asset write-ups).
Anytime the “cash” tax expense exceeds the “book” tax expense you record this as an decrease to the Deferred Tax Liability on the Balance Sheet; if the “book” expense is higher, then you record that as an increase to the DTL."""
ADVANCED@Merger@"""Explain the complete formula for how to calculate Goodwill in an M&A deal."""@"""Goodwill = Equity Purchase Price – Seller Book Value + Seller’s Existing Goodwill – Asset Write-Ups – Seller’s Existing Deferred Tax Liability + Write-Down of Seller’s Existing Deferred Tax Asset + Newly Created Deferred Tax Liability
A couple notes here:
• Seller Book Value is just the Shareholders’ Equity number.
• You add the Seller’s Existing Goodwill because it gets written down to $0 in an
M&A deal.
• You subtract the Asset Write-Ups because these are additions to the Assets side
of the Balance Sheet – Goodwill is also an asset, so effectively you need less
Goodwill to “plug the hole.”
• Normally you assume 100% of the Seller’s existing DTL is written down.
• The seller’s existing DTA may or may not be written down completely (see the
next question)."""
ADVANCED@Merger@"""Explain why we would write down the seller’s existing Deferred Tax Asset in an M&A deal."""@"""You write it down to reflect the fact that Deferred Tax Assets include NOLs, and that you might use these NOLs post-transaction to offset the combined entity’s taxable income.
In an asset or 338(h)(10) purchase you assume that the entire NOL balance goes to $0 in the transaction, and then you write down the existing Deferred Tax Asset by this NOL write-down.
In a stock purchase the formula is:
DTA Write-Down = Buyer Tax Rate * MAX(0, NOL Balance – Allowed Annual NOL Usage * Expiration Period in Years)
This formula is saying, “If we’re going to use up all these NOLs post transaction, let’s not write anything down. Otherwise, let’s write down the portion that we cannot actually use post-transaction, i.e. whatever our existing NOL balance is minus the amount we can use per year times the number of years.”"""
ADVANCED@Merger@"""What’s a Section 338(h)(10) election and why might a company want to use it in an M&A deal?"""@"""A Section 338(h)(10) election blends the benefits of a stock purchase and an asset purchase:
• Legally it is a stock purchase, but accounting-wise it’s treated like an asset purchase.
• The seller is still subject to double-taxation – on its assets that have appreciated and on the proceeds from the sale.
• But the buyer receives a step-up tax basis on the new assets it acquires, and it can depreciate/amortize them so it saves on taxes.
Even though the seller still gets taxed twice, buyers will often pay more in a 338(h)(10) deal because of the tax-savings potential. It’s particularly helpful for:
• Sellers with high NOL balances (more tax-savings for the buyer because this NOL balance will be written down completely – and so more of the excess purchase price can be allocated to asset write-ups).
• If the company has been an S-corporation for over 10 years – in this case it doesn’t have to pay a tax on the appreciation of its assets.
The requirements to use 338(h)(10) are complex and bankers don’t deal with this – that is the role of lawyers and tax accountants."""
ADVANCED@Merger@"""What is an exchange ratio and when would companies use it in an M&A deal?"""@"""An exchange ratio is an alternate way of structuring a 100% stock M&A deal, or any M&A deal with a portion of stock involved.
Let’s say you were going to buy a company for $100 million in an all-stock deal. Normally you would determine how much stock to issue by dividing the $100 million by the buyer’s stock price, and using that to get the new share count.
With an exchange ratio, by contrast, you would tie the number of new shares to the buyer’s own shares – so the seller might receive 1.5 shares of the buyer’s shares for each of its shares, rather than shares worth a specific dollar amount.
Buyers might prefer to do this if they believe their stock price is going to decline post- transaction – sellers, on the other hand, would prefer a fixed dollar amount in stock unless they believe the buyer’s share price will rise after the transaction."""
ADVANCED@Merger@"""Walk me through the most important terms of a Purchase Agreement in an M&A deal."""@"""There are dozens, but here are the most important ones:
• Purchase Price: Stated as a per-share amount for public companies.
• Form of Consideration: Cash, Stock, Debt...
• Transaction Structure: Stock, Asset, or 338(h)(10)
• Treatment of Options: Assumed by the buyer? Cashed out? Ignored?
• Employee Retention: Do employees have to sign non-solicit or non-compete
agreements? What about management?
• Reps & Warranties: What must the buyer and seller claim is true about their
respective businesses?
• No-Shop / Go-Shop: Can the seller “shop” this offer around and try to get a
better deal, or must it stay exclusive to this buyer?"""
ADVANCED@Merger@"""What’s an Earnout and why would a buyer offer it to a seller in an M&A deal?"""@"""An Earnout is a form of “deferred payment” in an M&A deal – it’s most common with private companies and start-ups, and is highly unusual with public sellers.
It is usually contingent on financial performance or other goals – for example, the buyer might say, “We’ll give you an additional $10 million in 3 years if you can hit $100 million in revenue by then.”
Buyers use it to incentivize sellers to continue to perform well and to discourage management teams from taking the money and running off to an island in the South Pacific once the deal is done."""
ADVANCED@Merger@"""How would an accretion / dilution model be different for a private seller?"""@"""The mechanics are the same, but the transaction structure is more likely to be an asset purchase or 338(h)(10) election; private sellers also don’t have Earnings Per Share so you would only project down to Net Income on the seller’s Income Statement.
Note that accretion / dilution makes no sense if you have a private buyer because private companies do not have Earnings Per Share."""
ADVANCED@Merger@"""How would I calculate “break-even synergies” in an M&A deal and what does the number mean?"""@"""To do this, you would set the EPS accretion / dilution to $0.00 and then back-solve in Excel to get the required synergies to make the deal neutral to EPS.
It’s important because you want an idea of whether or not a deal “works” mathematically, and a high number for the break-even synergies tells you that you’re going to need a lot of cost savings or revenue synergies to make it work."""
ADVANCED@Merger@"""Normally in an accretion / dilution model you care most about combining both companies’ Income Statements. But let’s say I want to combine all 3 financial statements – how would I do this?"""@"""You combine the Income Statements like you normally would (see the previous question on this), and then you do the following:
1. Combine the buyer’s and seller’s balance sheets (except for the seller’s Shareholders’ Equity number).
2. Make the necessary Pro-Forma Adjustments (cash, debt, goodwill/intangibles, etc.).
3. Project the combined Balance Sheet using standard assumptions for each item (see the Accounting section).
4. Then project the Cash Flow Statement and link everything together as you normally would with any other 3-statement model."""
ADVANCED@Merger@"""How do you handle options, convertible debt, and other dilutive securities in a merger model?"""@"""The exact treatment depends on the terms of the Purchase Agreement – the buyer might assume them or it might allow the seller to “cash them out” assuming that the per-share purchase price is above the exercise prices of these dilutive securities.
If you assume they’re exercised, then you calculate dilution to the equity purchase price in the same way you normally would – Treasury Stock Method for options, and assume that convertibles convert into normal shares using the conversion price."""
ADVANCED@Merger@"""What are the main 3 transaction structures you could use to acquire another company?"""@"""Stock Purchase, Asset Purchase, and 338(h)(10) Election. The basic differences:
Stock Purchase:
• Buyer acquires all asset and liabilities of the seller as well as off-balance sheet items.
• The seller is taxed at the capital gains tax rate.
• The buyer receives no step-up tax basis for the newly acquired assets, and it can’t
depreciate/amortize them for tax purposes.
• A Deferred Tax Liability gets created as a result of the above.
• Most common for public companies and larger private companies.
Asset Purchase:
• Buyer acquires only certain assets and assumes only certain liabilities of the seller and gets nothing else.
• Seller is taxed on the amount its assets have appreciated (what the buyer is paying for each one minus its book value) and also pays a capital gains tax on the proceeds.
• The buyer receives a step-up tax basis for the newly acquired assets, and it can depreciate/amortize them for tax purposes.
• No Deferred Tax Liability is created as a result of the above.
• Most common for private companies, divestitures, and distressed public
companies.
Section 338(h)(10) Election:
• Buyer acquires all asset and liabilities of the seller as well as off-balance sheet items.
• Seller is taxed on the amount its assets have appreciated (what the buyer is paying for each one minus its book value) and also pays a capital gains tax on the proceeds.
• The buyer receives a step-up tax basis for the newly acquired assets, and it can depreciate/amortize them for tax purposes.
• No Deferred Tax Liability is created as a result of the above.
• Most common for private companies, divestitures, and distressed public companies.
• To compensate for the buyer’s favorable tax treatment, the buyer usually agrees to pay more than it would in an Asset Purchase."""
ADVANCED@Merger@"""Would a seller prefer a stock purchase or an asset purchase? What about the buyer?"""@"""A seller almost always prefers a stock purchase to avoid double taxation and to get rid of all its liabilities. The buyer almost always prefers an asset deal so it can be more careful about what it acquires and to get the tax benefit from being able to deduct depreciation and amortization of asset write-ups for tax purposes."""
ADVANCED@Merger@"""Explain what a contribution analysis is and why we might look at it in a merger model."""@"""A contribution analysis compares how much revenue, EBITDA, Pre-Tax Income, cash, and possibly other items the buyer and seller are “contributing” to estimate what the ownership of the combined company should be.
For example, let’s say that the buyer is set to own 50% of the new company and the seller is set to own 50%. But the buyer has $100 million of revenue and the seller has $50 million of revenue – a contribution analysis would tell us that the buyer “should” own 66% instead because it’s contributing 2/3 of the combined revenue.
It’s most common to look at this with merger of equals scenarios, and less common when the buyer is significantly larger than the seller."""
ADVANCED@Merger@""" How do you account for transaction costs, financing fees, and miscellaneous expenses in a merger model?"""@"""In the “old days” you used to capitalize these expenses and then amortize them; with the new accounting rules, you’re supposed to expense transaction and miscellaneous fees upfront, but capitalize the financing fees and amortize them over the life of the debt.
Expensed transaction fees come out of Retained Earnings when you adjust the Balance Sheet, while capitalized financing fees appear as a new Asset on the Balance Sheet and are amortized each year according to the tenor of the debt."""
BASIC@LBO@"""Walk me through a basic LBO model."""@"""“In an LBO Model, Step 1 is making assumptions about the Purchase Price, Debt/Equity ratio, Interest Rate on Debt and other variables; you might also assume something about the company’s operations, such as Revenue Growth or Margins, depending on how much information you have.
Step 2 is to create a Sources & Uses section, which shows how you finance the transaction and what you use the capital for; this also tells you how much Investor Equity is required.
Step 3 is to adjust the company’s Balance Sheet for the new Debt and Equity figures, and also add in Goodwill & Other Intangibles on the Assets side to make everything balance.
In Step 4, you project out the company’s Income Statement, Balance Sheet and Cash Flow Statement, and determine how much debt is paid off each year, based on the available Cash Flow and the required Interest Payments.
Finally, in Step 5, you make assumptions about the exit after several years, usually assuming an EBITDA Exit Multiple, and calculate the return based on how much equity is returned to the firm.”"""
BASIC@LBO@"""Why would you use leverage when buying a company?"""@"""To boost your return.
Remember, any debt you use in an LBO is not “your money” – so if you’re paying $5 billion for a company, it’s easier to earn a high return on $2 billion of your own money and $3 billion borrowed from elsewhere vs. $3 billion of your own money and $2 billion of borrowed money.
A secondary benefit is that the firm also has more capital available to purchase other companies because they’ve used leverage."""
BASIC@LBO@"""What variables impact an LBO model the most?"""@"""Purchase and exit multiples have the biggest impact on the returns of a model. After that, the amount of leverage (debt) used also has a significant impact, followed by operational characteristics such as revenue growth and EBITDA margins."""
BASIC@LBO@"""How do you pick purchase multiples and exit multiples in an LBO model?"""@"""The same way you do it anywhere else: you look at what comparable companies are trading at, and what multiples similar LBO transactions have had. As always, you also show a range of purchase and exit multiples using sensitivity tables.
Sometimes you set purchase and exit multiples based on a specific IRR target that you’re trying to achieve – but this is just for valuation purposes if you’re using an LBO model to value the company."""
BASIC@LBO@"""What is an “ideal” candidate for an LBO?"""@"""“Ideal” candidates have stable and predictable cash flows, low-risk businesses, not much need for ongoing investments such as Capital Expenditures, as well as an opportunity for expense reductions to boost their margins. A strong management team also helps, as does a base of assets to use as collateral for debt.
The most important part is stable cash flow."""
BASIC@LBO@"""How do you use an LBO model to value a company, and why do we sometimes say that it sets the “floor valuation” for the company?"""@"""You use it to value a company by setting a targeted IRR (for example, 25%) and then back-solving in Excel to determine what purchase price the PE firm could pay to achieve that IRR.
This is sometimes called a “floor valuation” because PE firms almost always pay less for a company than strategic acquirers would."""
BASIC@LBO@"""Give an example of a “real-life” LBO."""@"""The most common example is taking out a mortgage when you buy a house. Here’s how the analogy works:
• Down Payment: Investor Equity in an LBO
• Mortgage: Debt in an LBO
• Mortgage Interest Payments: Debt Interest in an LBO
• Mortgage Repayments: Debt Principal Repayments in an LBO
• Selling the House: Selling the Company / Taking It Public in an LBO"""
BASIC@LBO@"""Can you explain how the Balance Sheet is adjusted in an LBO model?"""@"""First, the Liabilities & Equities side is adjusted – the new debt is added on, and the Shareholders’ Equity is “wiped out” and replaced by however much equity the private equity firm is contributing.
On the Assets side, Cash is adjusted for any cash used to finance the transaction, and then Goodwill & Other Intangibles are used as a “plug” to make the Balance Sheet balance.
Depending on the transaction, there could be other effects as well – such as capitalized financing fees added to the Assets side."""
BASIC@LBO@"""Why are Goodwill & Other Intangibles created in an LBO?"""@"""Remember, these both represent the premium paid to the “fair market value” of the company. In an LBO, they act as a “plug” and ensure that the changes to the Liabilities & Equity side are balanced by changes to the Assets side."""
BASIC@LBO@"""We saw that a strategic acquirer will usually prefer to pay for another company in cash – if that’s the case, why would a PE firm want to use debt in an LBO?"""@"""It’s a different scenario because:
1. The PE firm does not intend to hold the company for the long-term – it usually sells it after a few years, so it is less concerned with the “expense” of cash vs. debt and more concerned about using leverage to boost its returns by reducing the amount of capital it has to contribute upfront.
2. In an LBO, the debt is “owned” by the company, so they assume much of the risk. Whereas in a strategic acquisition, the buyer “owns” the debt so it is more risky for them."""
BASIC@LBO@"""Do you need to project all 3 statements in an LBO model? Are there any “shortcuts?"""@"""Yes, there are shortcuts and you don’t necessarily need to project all 3 statements.
For example, you do not need to create a full Balance Sheet – bankers sometimes skip this if they are in a rush. You do need some form of Income Statement, something to track how the Debt balances change and some type of Cash Flow Statement to show how much cash is available to repay debt.
But a full-blown Balance Sheet is not strictly required, because you can just make assumptions on the Net Change in Working Capital rather than looking at each item individually."""
BASIC@LBO@"""How would you determine how much debt can be raised in an LBO and how many tranches there would be?"""@"""Usually you would look at Comparable LBOs and see the terms of the debt and how many tranches each of them used. You would look at companies in a similar size range and industry and use those criteria to determine the debt your company can raise."""
BASIC@LBO@"""Let’s say we’re analyzing how much debt a company can take on, and what the terms of the debt should be. What are reasonable leverage and coverage ratios?"""@"""This is completely dependent on the company, the industry, and the leverage and coverage ratios for comparable LBO transactions.
To figure out the numbers, you would look at “debt comps” showing the types, tranches, and terms of debt that similarly sized companies in the industry have used recently.
There are some general rules: for example, you would never lever a company at 50x EBITDA, and even during the bubble leverage rarely exceeded 5-10x EBITDA."""
BASIC@LBO@"""What is the difference between bank debt and high-yield debt?"""@"""This is a simplification, but broadly speaking there are 2 “types” of debt: “bank debt” and “high-yield debt.” There are many differences, but here are a few of the most important ones:
• High-yield debt tends to have higher interest rates than bank debt (hence the name “high-yield”).
• High-yield debt interest rates are usually fixed, whereas bank debt interest rates are “floating” – they change based on LIBOR or the Fed interest rate.
• High-yield debt has incurrence covenants while bank debt has maintenance covenants. The main difference is that incurrence covenants prevent you from doing something (such as selling an asset, buying a factory, etc.) while maintenance covenants require you to maintain a minimum financial performance (for example, the Debt/EBITDA ratio must be below 5x at all times).
• Bank debt is usually amortized – the principal must be paid off over time – whereas with high-yield debt, the entire principal is due at the end (bullet maturity).
Usually in a sizable Leveraged Buyout, the PE firm uses both types of debt.
Again, there are many different types of debt – this is a simplification, but it’s enough for entry-level interviews."""
BASIC@LBO@"""Why might you use bank debt rather than high-yield debt in an LBO?"""@"""If the PE firm or the company is concerned about meeting interest payments and wants a lower-cost option, they might use bank debt; they might also use bank debt if they are planning on major expansion or Capital Expenditures and don’t want to be restricted by incurrence covenants."""
BASIC@LBO@"""Why would a PE firm prefer high-yield debt instead?"""@"""If the PE firm intends to refinance the company at some point or they don’t believe their returns are too sensitive to interest payments, they might use high-yield debt. They might also use the high-yield option if they don’t have plans for major expansion or selling off the company’s assets."""
BASIC@LBO@"""Why would a private equity firm buy a company in a “risky” industry, such as technology?"""@"""Although technology is more “risky” than other markets, remember that there are mature, cash flow-stable companies in almost every industry. There are some PE firms that specialize in very specific goals, such as:
• Industry consolidation – buying competitors in a similar market and combining them to increase efficiency and win more customers.
• Turnarounds – taking struggling companies and making them function properly again.
• Divestitures – selling off divisions of a company or taking a division and turning it into a strong stand-alone entity.
So even if a company isn’t doing well or seems risky, the firm might buy it if it falls into one of these categories."""
BASIC@LBO@"""How could a private equity firm boost its return in an LBO?"""@"""1. Lower the Purchase Price in the model.
2. Raise the Exit Multiple / Exit Price.
3. Increase the Leverage (debt) used.
4. Increase the company’s growth rate (organically or via acquisitions).
5. Increase margins by reducing expenses (cutting employees, consolidating
buildings, etc.).
Note that these are all “theoretical” and refer to the model rather than reality – in
practice it’s hard to actually implement these."""
BASIC@LBO@"""What is meant by the “tax shield” in an LBO?"""@"""This means that the interest a firm pays on debt is tax-deductible – so they save money on taxes and therefore increase their cash flow as a result of having debt from the LBO.
Note, however, that their cash flow is still lower than it would be without the debt – saving on taxes helps, but the added interest expenses still reduces Net Income over what it would be for a debt-free company."""
BASIC@LBO@"""What is a dividend recapitalization (“dividend recap”)?"""@"""In a dividend recap, the company takes on new debt solely to pay a special dividend out to the PE firm that bought it.
It would be like if you made your friend take out a personal loan just so he/she could pay you a lump sum of cash with the loan proceeds.
As you might guess, dividend recaps have developed a bad reputation, though they’re still commonly used."""
BASIC@LBO@"""Why would a PE firm choose to do a dividend recap of one of its portfolio companies?"""@"""Primarily to boost returns. Remember, all else being equal, more leverage means a higher return to the firm.
With a dividend recap, the PE firm is “recovering” some of its equity investment in the company – and as we saw earlier, the lower the equity investment, the better, since it’s easier to earn a higher return on a smaller amount of capital."""
BASIC@LBO@"""How would a dividend recap impact the 3 financial statements in an LBO?"""@"""No changes to the Income Statement. On the Balance Sheet, Debt would go up and Shareholders’ Equity would go down and they would cancel each other out so that everything remained in balance.
On the Cash Flow Statement, there would be no changes to Cash Flow from Operations or Investing, but under Financing the additional Debt raised would cancel out the Cash paid out to the investors, so Net Change in Cash would not change."""
ADVANCED@LBO@"""Tell me about all the different kinds of debt you could use in an LBO and the differences between everything."""@"""Here’s a handy chart to explain all of this. Note that this chart does not cover every single feature or every single type of debt in the universe – just the most important ones, and what you’re likely to be asked about in finance interviews:
'Pg 155 BIWS-400 book'
“Tenor” is just the fancy word for “How many years will this loan be outstanding?”
Each type of debt is arranged in order of rising interest rates – so a revolver has the lowest interest rate, Term Loan A is slightly higher, B is slightly higher, Senior Notes are higher than Term Loan B, and so on.
“Seniority” refers to the order of claims on a company’s assets in a bankruptcy – the Senior Secured holders are first in line, followed by Senior Unsecured, Senior Subordinated, and then Equity Investors.
“Floating” or “Fixed” Interest Rates: A “floating” interest rate is tied to LIBOR. For example, L + 100 means that the interest rate of the loan is whatever LIBOR is at currently, plus 100 basis points (1.0%). A fixed interest rate, on the other hand, would be 11%. It doesn’t “float” with LIBOR or any other rate.
Amortization: “straight line” means the company pays off the principal in equal installments each year, while “bullet” means that the entire principal is due at the end of the loan’s lifecycle. “Minimal” just means a low percentage of the principal each year, usually in the 1-5% range.
Call Protection: Is the company prohibited from “calling back” – paying off or redeeming – the security for a certain period? This is beneficial for investors because they are guaranteed a certain number of interest payments."""
ADVANCED@LBO@"""How would an asset write-up or write-down affect an LBO model? / Walk me through how you adjust the Balance Sheet in an LBO model."""@"""All of this is very similar to what you would see in a merger model – you calculate Goodwill, Other Intangibles, and the rest of the write-ups in the same way, and then the Balance Sheet adjustments (e.g. subtracting cash, adding in capitalized financing fees, writing up assets, wiping out goodwill, adjusting the deferred tax assets / liabilities, adding in new debt, etc.) are almost the same.
The key differences:
• In an LBO model you assume that the existing Shareholders’ Equity is wiped out and replaced by the equity the private equity firm contributes to buy the company; you may also add in Preferred Stock, Management Rollover, or
Rollover from Option Holders to this number as well depending on what you’re
assuming for transaction financing.
• In an LBO model you’ll usually be adding a lot more tranches of debt vs. what
you would see in a merger model.
• In an LBO model you’re not combining two companies’ Balance Sheets."""
ADVANCED@LBO@"""Normally we care about the IRR for the equity investors in an LBO – the PE firm that buys the company – but how do we calculate the IRR for the debt investors?"""@"""For the debt investors, you need to calculate the interest and principal payments they receive from the company each year.
Then you simply use the IRR function in Excel and start with the negative amount of the original debt for “Year 0,” assume that the interest and principal payments each year are your “cash flows” and then assume that the remaining debt balance in the final year is your “exit value.”
Most of the time, returns for debt investors will be lower than returns for the equity investors – but if the deal goes poorly or the PE firm can’t sell the company for a good price, the reverse could easily be true."""
ADVANCED@LBO@"""Why might a private equity firm allot some of a company’s new equity in an LBO to a management option pool, and how would this affect the model?"""@"""This is done for the same reason you have an Earnout in an M&A deal: the PE firm wants to incentivize the management team and keep everyone on-board until they exit the investment.
The difference is that there’s no technical limit on how much management might receive from such an option pool: if they hit it out of the park, maybe they’ll all become millionaires.
In your LBO model, you would need to calculate a per-share purchase price when the PE firm exits the investment, and then calculate how much of the proceeds go to the management team based on the Treasury Stock Method.
An option pool by itself would reduce the PE firm’s return, but this is offset by the fact that the company should perform better with this incentive in place."""
ADVANCED@LBO@"""Why you would you use PIK (Payment In Kind) debt rather than other types of debt, and how does it affect the debt schedules and the other statements?"""@"""Unlike “normal” debt, a PIK loan does not require the borrower to make cash interest payments – instead, the interest just accrues to the loan principal, which keeps going up over time. A PIK “toggle” allows the company to choose whether to pay the interest in cash or have it accrue to the principal (these have disappeared since the credit crunch).
PIK is more risky than other forms of debt and carries with it a higher interest rate than traditional bank debt or high yield debt.
Adding it to the debt schedules is similar to adding high-yield debt with a bullet maturity – except instead of assuming cash interest payments, you assume that the interest accrues to the principal instead.
You should then include this interest on the Income Statement, but you need to add back any PIK interest on the Cash Flow Statement because it’s a non-cash expense."""
ADVANCED@LBO@"""What are some examples of incurrence covenants? Maintenance covenants?"""@"""Incurrence Covenants:
• Company cannot take on more than $2 billion of total debt.
• Proceeds from any asset sales must be earmarked to repay debt.
• Company cannot make acquisitions of over $200 million in size.
• Company cannot spend more than $100 million on CapEx each year.
Maintenance Covenants:
• Total Debt / EBITDA cannot exceed 3.0 x
• Senior Debt / EBITDA cannot exceed 2.0 x
• (Total Cash Payable Debt + Capitalized Leases) / EBITDAR cannot exceed 4.0 x
• EBITDA / Interest Expense cannot fall below 5.0 x
• EBITDA / Cash Interest Expense cannot fall below 3.0 x
• (EBITDA – CapEx) / Interest Expense cannot fall below 2.0 x"""
ADVANCED@LBO@"""Just like a normal M&A deal, you can structure an LBO either as a stock purchase or as an asset purchase. Can you also use Section 338(h)(10) election?"""@"""In most cases, no – because one of the requirements for Section 338(h)(10) is that the buyer must be a C corporation. Most private equity firms are organized as LLCs or Limited Partnerships, and when they acquire companies in an LBO, they create an LLC shell company that “acquires” the company on paper."""
ADVANCED@LBO@"""Walk me through how you calculate optional repayments on debt in an LBO model."""@"""First, note that you only look at optional repayments for Revolvers and Term Loans – high-yield debt doesn’t have a prepayment option, so effectively it’s always $0.
First, you check how much cash flow you have available based on your Beginning Cash Balance, Minimum Cash Balance, Cash Flow Available for Debt Repayment from the Cash Flow Statement, and how much you use to make Mandatory Debt Repayments.
Then, if you’ve used your Revolver at all you pay off the maximum amount that you can with the cash flow you have available.
Next, for Term Loan A you assume that you pay off the maximum you can, taking into account that you’ve lost any cash flow you used to pay down the Revolver. You also need to take into account that you might have paid off some of Term Loan A’s principal as part of the Mandatory Repayments.
Finally, you do the same thing for Term Loan B, subtracting from the “cash flow available for debt repayment” what you’ve already used up on the Revolver and Term Loan A. And just like Term Loan A, you need to take into account any Mandatory Repayments you’ve made so that you don’t pay off more than the entire Term Loan B balance.
The formulas here get very messy and depend on how your model is set up, but this is the basic idea for optional debt repayments."""
ADVANCED@LBO@"""Explain how a Revolver is used in an LBO model."""@"""You use a Revolver when the cash required for your Mandatory Debt Repayments exceeds the cash flow you have available to repay them.
The formula is: Revolver Borrowing = MAX(0, Total Mandatory Debt Repayment – Cash Flow Available to Repay Debt).
The Revolver starts off “undrawn,” meaning that you don’t actually borrow money and don’t accrue a balance unless you need it – similar to how credit cards work.
You add any required Revolver Borrowing to your running total for cash flow available for debt repayment before you calculate Mandatory and Optional Debt Repayments.
Within the debt repayments themselves, you assume that any Revolver Borrowing from previous years is paid off first with excess cash flow before you pay off any Term Loans."""
ADVANCED@LBO@"""How would you adjust the Income Statement in an LBO model?"""@"""The most common adjustments:
• Cost Savings – Often you assume the PE firm cuts costs by laying off employees, which could affect COGS, Operating Expenses, or both.
• New Depreciation Expense – This comes from any PP&E write-ups in the transaction.
• New Amortization Expense – This includes both the amortization from written- up intangibles and from capitalized financing fees.
• Interest Expense on LBO Debt – You need to include both cash and PIK interest here.
• Sponsor Management Fees – Sometimes PE firms charge a “management fee” to a company to account for the time and effort they spend managing it.
• Common Stock Dividend – Although private companies don’t pay dividends to shareholders, they could pay out a dividend recap to the PE investors.
• Preferred Stock Dividend – If Preferred Stock is used as a form of financing in the transaction, you need to account for Preferred Stock Dividends on the Income Statement.
Cost Savings and new Depreciation / Amortization hit the Operating Income line; Interest Expense and Sponsor Management Fees hit Pre-Tax Income; and you need to subtract the dividend items from your Net Income number."""
ADVANCED@LBO@"""In an LBO model, is it possible for debt investors to get a higher return than the PE firm? What does it tell us about the company we’re modeling?"""@"""Yes, and it happens more commonly than you’d think. Remember, high-yield debt investors often get interest rates of 10-15% or more – which effectively guarantees an IRR in that range for them.
So no matter what happens to the company or the market, that debt gets repaid and the debt investors get the interest payments.
But let’s say that the median EBITDA multiples contract, or that the company fails to grow or actually shrinks – in these cases the PE firm could easily get an IRR below what the debt investors get."""
ADVANCED@LBO@"""Most of the time, increased leverage means an increased IRR. Explain how increasing the leverage could reduce the IRR."""@"""This scenario is admittedly rare, but it could happen if the increase leverage increases interest payments or debt repayments to very high levels, preventing the company from using its cash flow for other purposes.
Sometimes in LBO models, increasing the leverage increases the IRR up to a certain point – but then after that the IRR starts falling as the interest payments or principal repayments become “too big.”
For this scenario to happen you would need a “perfect storm” of:
1. Relative lack of cash flow / EBITDA growth.
2. High interest payments and principal repayments relative to cash flow.
3. Relatively high purchase premium or purchase multiple to make it more difficult
to get a high IRR in the first place."""
`;