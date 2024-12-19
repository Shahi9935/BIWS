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
`;